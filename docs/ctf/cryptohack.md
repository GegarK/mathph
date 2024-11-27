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

## RSA


## ECC


## ZKP