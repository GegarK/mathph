# Solana

## [命令行](https://docs.solanalabs.com/cli/usage)

| Command               | Command               | Command               | Command                 |
|-----------------------|-----------------------|-----------------------|-------------------------|
| solana                | solana-genesis        | solana-keygen         | solana-stake-accounts   |
| solana-watchtower     | solana-bench-tps      | solana-gossip         | solana-ledger-tool      |
| solana-test-validator | solana-dos            | solana-install        | solana-log-analyzer     |
| solana-tokens         | solana-faucet         | solana-install-init   | solana-net-shaper       |
| solana-validator      |                       |                       |                         |

## Solana命令行

* solana-keygen new 生成密钥对

```sh
~/.config/solana/id.json
[105,38,176,206,95,148,97,25,221,92,90,24,179,189,244,158,81,171,136,91,73,10,162,176,222,236,38,165,158,111,210,51,235,185,88,38,143,151,5,157,103,104,148,124,47,142,116,104,230,241,34,218,162,254,236,160,97,136,225,209,215,218,163,144]
```

* solana-keygen pubkey 查看公钥

```sh
solana-keygen pubkey ~/.config/solana/id.json

GsAjFVdC3PXReBrgnTw22edFoVmJjaWPEjTjXznsBDfu
```

* solana-keygen verify 校验密钥对

```sh
solana-keygen verify GsAjFVdC3PXReBrgnTw22edFoVmJjaWPEjTjXznsBDfu
```

* solana-keygen recover 'prompt://' 助记词恢复

```sh
符合BIP-39格式
abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
```

* solana balance 查看余额

* 切换网络地址

```sh
solana config set --url https://api.devnet.solana.com
solana config set --url https://api.testnet.solana.com
solana config set --url https://api.mainnet-beta.solana.com
```