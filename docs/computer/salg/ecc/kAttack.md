# 重复K攻击

在消息签名过程中，用户需要随机生成一个 $k$ 值并用于签名消息。重要的是，在不同的签名中必须使用不同的 $k$ 值。如果在签署两条不同的消息时使用相同的 $k$ 值，攻击者可以通过已签名的两条消息计算出用户的私钥。

在签名过程中，用户公开发送了：

$$
r = x_1 \ (\text{mod} \ p)
$$

$$
s = k^{-1} \cdot (z + r \cdot d_A) \ (\text{mod} \ n)
$$

其中，$r$ 是 $x_1$ 的 $x$ 坐标模 $p$，$s$ 是使用私钥 $d_A$ 和 $k$ 值计算出来的签名部分，$z$ 是消息的哈希值。

假设用户签署了两条不同的消息，分别对应于 $z_1$ 和 $z_2$，并且公开发送了两对签名值 $(r, s_1)$ 和 $(r, s_2)$，也就是说在这两条签名中使用了相同的 $k$ 值。我们可以得到如下推导：

$$
s_1 - s_2 = k^{-1} \cdot (z_1 + r \cdot d_A) - k^{-1} \cdot (z_2 + r \cdot d_A)
$$

由于 $r \cdot d_A$ 项相同，我们可以简化为：

$$
s_1 - s_2 = k^{-1} \cdot (z_1 - z_2)
$$

从这个公式中，攻击者可以计算出 $k$：

$$
k = \frac{z_1 - z_2}{s_1 - s_2} \ (\text{mod} \ n)
$$

一旦攻击者计算出 $k$，就可以利用其中一个签名来计算用户的私钥 $d_A$。假设我们选择签名 $(r, s_1)$，攻击者可以使用如下公式来计算私钥：

$$
d_A = r^{-1} \cdot (k \cdot s_1 - z_1) \ (\text{mod} \ n)
$$

从而获得签名者的私钥，进而可以签署任何消息。

### 代码实现

```python
from ecdsa.ecdsa import curve_256, generator_256, Public_key, Private_key
from Crypto.Util.number import bytes_to_long, long_to_bytes
from hashlib import sha256
import random

# 选择曲线和生成器
curve = curve_256
generator = generator_256
n = generator.order()

# 创建私钥和公钥
secret_key = 6743529130774090927928101169617481154782309
public_key = Public_key(generator, generator * secret_key)
private_key = Private_key(public_key, secret_key)

# 使用相同的 k 签署 2 条消息
k = random.randrange(curve.p())
message1 = "Life is like a box of chocolates."
message2 = "You never know what you're gonna get."
z1 = bytes_to_long(sha256(message1.encode()).digest())
z2 = bytes_to_long(sha256(message2.encode()).digest())

signature1 = private_key.sign(z1, k)
signature2 = private_key.sign(z2, k)

# 给定两条消息和它们的签名，计算 k
found_k = (z1 - z2) * inverse_mod(signature1.s - signature2.s, n) % n
assert k == found_k

# 给定 k 和其中一条消息，计算私钥
found_key = inverse_mod(signature1.r, n) * (found_k * signature1.s - z1) % n
assert found_key == secret_key
print("success!")
print("The secret is:", long_to_bytes(found_key).decode())
```