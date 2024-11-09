# 工具教学

## 开发工具

* [Solana](https://docs.solanalabs.com/cli/install)
* [Anchor](https://www.anchor-lang.com/)
* [Playground](https://beta.solpg.io/)

* 安装Rust
* 安装Solana

```sh
sh -c "$(curl -sSfL https://release.solana.com/v1.18.18/install)"
```

* 安装Anchor

```sh
cargo install --git https://github.com/coral-xyz/anchor avm --locked --force
sudo apt-get update && sudo apt-get upgrade && sudo apt-get install -y pkg-config build-essential libudev-dev libssl-dev
avm install latest
avm use latest
```

## [awesome-solana](https://github.com/avareum/awesome-solana)

<DocsAD/>

## HelloWorld

* anchor init test1
* anchor build

```rust
use anchor_lang::prelude::*;

declare_id!("BgfQ9VDxpZGW3WWj4ZW4hwSxSf8W63jZB7HdVvmttW48");

#[program]
pub mod test1 {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
```

* anchor deploy