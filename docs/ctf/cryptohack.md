# CryptoHack

## 题目[https://cryptohack.org/](https://cryptohack.org/)

<DocsAD/>

## [https://cryptohack.org/challenges/introduction/](https://cryptohack.org/challenges/introduction/)简单

## [https://cryptohack.org/challenges/general/](https://cryptohack.org/challenges/general/)

* ASCII

```py
# 给定的整数数组
ascii_values = [99, 114, 121, 112, 116, 111, 123, 65, 83, 67, 73, 73, 95, 112, 114, 49, 110, 116, 52, 98, 108, 51, 125]

# 将每个整数转换为对应的 ASCII 字符
flag = ''.join(chr(value) for value in ascii_values)

# 打印结果crypto{ASCII_pr1nt4bl3}
print(flag)
```

## Hex

```py
# Given hex string
hex_string = "63727970746f7b596f755f77696c6c5f62655f776f726b696e675f776974685f6865785f737472696e67735f615f6c6f747d"

# Decode the hex string into bytes
decoded_bytes = bytes.fromhex(hex_string)

# Convert the bytes to a string
flag = decoded_bytes.decode('utf-8')

# Print the flag crypto{You_will_be_working_with_hex_strings_a_lot}
print(flag)
```

## Base64

```py
import base64

# Given hex string
hex_string = "72bca9b68fc16ac7beeb8f849dca1d8a783e8acf9679bf9269f7bf"

# Step 1: Decode the hex string into bytes
decoded_bytes = bytes.fromhex(hex_string)

# Step 2: Encode the bytes into Base64
base64_encoded = base64.b64encode(decoded_bytes).decode('utf-8')

# Print the Base64 result crypto/Base+64+Encoding+is+Web+Safe/
print(base64_encoded) 
```

## Bytes and Big Integers

```py
from Crypto.Util.number import long_to_bytes

# Given integer
integer_value = 11515195063862318899931685488813747395775516287289682636499965282714637259206269

# Convert the integer back to bytes and decode into a string
message = long_to_bytes(integer_value).decode('utf-8')

# Print the message crypto{3nc0d1n6_4ll_7h3_w4y_d0wn}
print(message)
```

## XOR Starer

```py
label = "label"
new_string = "".join(chr(ord(c) ^ 13) for c in label)
flag = f"crypto{{{new_string}}}"
print(flag)  crypto{aloha}
```

## RSA Null or Never

```py
#!/usr/bin/env python3

from Crypto.PublicKey import RSA
from Crypto.Util.number import bytes_to_long

FLAG = b"crypto{???????????????????????????????????}"


def pad100(msg):
    return msg + b'\x00' * (100 - len(msg))


key = RSA.generate(1024, e=3)
n, e = key.n, key.e

m = bytes_to_long(pad100(FLAG))
c = pow(m, e, n)

print(f"n = {n}")
print(f"e = {e}")
print(f"c = {c}")

outputfile
n = 95341235345618011251857577682324351171197688101180707030749869409235726634345899397258784261937590128088284421816891826202978052640992678267974129629670862991769812330793126662251062120518795878693122854189330426777286315442926939843468730196970939951374889986320771714519309125434348512571864406646232154103
e = 3
c = 63476139027102349822147098087901756023488558030079225358836870725611623045683759473454129221778690683914555720975250395929721681009556415292257804239149809875424000027362678341633901036035522299395660255954384685936351041718040558055860508481512479599089561391846007771856837130233678763953257086620228436828
```

```py
from Crypto.Util.number import *

n = 95341235345618011251857577682324351171197688101180707030749869409235726634345899397258784261937590128088284421816891826202978052640992678267974129629670862991769812330793126662251062120518795878693122854189330426777286315442926939843468730196970939951374889986320771714519309125434348512571864406646232154103
e = 3
c = 63476139027102349822147098087901756023488558030079225358836870725611623045683759473454129221778690683914555720975250395929721681009556415292257804239149809875424000027362678341633901036035522299395660255954384685936351041718040558055860508481512479599089561391846007771856837130233678763953257086620228436828

B = b"crypto{" + (b"\x00"*35) + b"}" + (b"\x00"*57)

P.<x> = PolynomialRing(Zmod(n), implementation='NTL')
pol = (( (bytes_to_long(B) + (2**(58*8))*x) ) ^ e - c) // (2**(58*8*e))

roots = pol.small_roots(epsilon=1/30)

for root in roots:
    print(b"crypto{" + long_to_bytes(root) + b"}") 
```

## ECC Digestive

https://web.cryptohack.org/digestive/

```py
import requests
import json 

url_sign = "https://web.cryptohack.org/digestive/sign/"
url_verify = "https://web.cryptohack.org/digestive/verify/"

# Any username value works
username = "admin"
r = requests.get(url_sign + username)

# Forging a new message with the signature obtained
response = json.loads(r.text)

# Append admin = True to the dictionary, note that we can't use json.dumps here
# as it will shrink into {"admin": true, "username": "admin"}, which will have
# a different first 20 characters
msg = '{"admin": false, "username": "admin", "admin": true}' 
signature = response['signature'] # previously requested signature

r = requests.get(url_verify + msg + "/" + signature)
print(r.text)
```

## ZKP

```py

```