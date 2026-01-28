# Multi-Signature Wallet

A smart contract wallet that requires multiple owners to confirm a transaction before it is executed. This is the industry standard for managing treasury funds and shared assets securely.

## Logic (M-of-N)
- **Owners**: A list of distinct addresses that control the wallet.
- **Confirmations**: The number of approvals required to execute a transaction.
- **Workflow**:
  1. Any owner can **Submit** a transaction.
  2. Other owners must **Confirm** it.
  3. Once confirmations >= required, any owner can **Execute** it.

## Features
- Support for ETH transfers and arbitrary data calls (interacting with other contracts).
- Revoke confirmation mechanism.
- Event logging for off-chain tracking.

## Setup
1. Clone the repo.
2. Install dependencies:
   ```bash
   npm install
