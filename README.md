# **ChainRunner**

**Go from JavaScript dev to Cardano dev, one on-chain quest at a time.**

**ChainRunner** is an open-source, gamified learning RPG for Cardano. Developers learn to build real applications by completing interactive, browser-based "quests" that are verified on-chain.

## **1\. The Problem: A "Great Filter" for Developers**

Cardano is a powerful platform, but for the global community of JavaScript/TypeScript developers, its learning curve is a "Great Filter."

* **High Barrier to Entry:** The current learning path (Plutus, Haskell) is complex and academic, which is a major deterrent for web developers who just want to *interact* with the blockchain.  
* **Lack of an Interactive "On-Ramp":** While video courses (Plutus Pioneers) and static documentation (the Dev Portal) exist, there is no interactive, gamified "sandbox" for Cardano. The ecosystem lacks a "CryptoZombies" or "boot.dev" equivalent that provides an instant, hands-on feedback loop.  
* **The "Dev Experience" Gap:** Developers want to learn by *doing*, not just by *reading*. They want to write code in their browser, see it work (or fail) instantly, and get rewarded for progress.

## **2\. The Solution: A Gamified Learning RPG**

**ChainRunner** is not another course. It's an on-chain learning RPG. We provide a fun, engaging, and "sticky" platform that guides a developer from their first wallet connection to minting their first Mainnet asset.

### **Core Features**

* **🎮 Gamified Quests:** Users progress through a "quest map," where each lesson is an interactive challenge.  
* **💻 In-Browser Code Editor:** Write real client-side JavaScript (using Lucid, Mesh) and API calls (Koios, NMKR) directly in the browser.  
* **⛓️ On-Chain Verification:** Our backend *verifies your actions* on the Testnet or Mainnet. When your quest is complete (e.g., your NFT is minted), we detect it and grant you XP.  
* **🏆 XP, Levels & Trophies:** Earn Experience Points (XP) for every completed quest. Level up your profile, unlock badges, and earn a final "Graduation Certificate" NFT on Mainnet as your "trophy."  
* **🚀 Real-World Curriculum:** Our prototype "Module 1" focuses on the *practical skills* a JS dev needs to build a dApp, including using the NMKR open-source toolkit.

## **3\. Module 1**

Our initial goal is to build a complete, functional prototype featuring the full 6-quest "Module 1" curriculum.

| Quest \# | Quest Name | Objective | Verification |
| :---- | :---- | :---- | :---- |
| **1** | **Hello, Wallet** | Connect to a browser wallet & read your address. | Off-Chain (JS detection) |
| **2** | **Reading the Chain** | Use the Koios API to query your wallet's balance. | Off-Chain (API check) |
| **3** | **Making a Move** | Build & submit a simple ADA transaction on Testnet. | **On-Chain Check** |
| **4** | **The Simple Mint** | Mint your first NFT on Testnet using Lucid/Mesh. | **On-Chain Check** |
| **5** | **Power Tools** | Mint a second NFT using the NMKR API/SDK. | **On-Chain Check** |
| **6** | **Going Live\!** | Mint your "Graduation NFT" *on Mainnet*. | **On-Chain Check** |

## **4\. Technical Architecture**

Our architecture is designed to be lean, scalable, and secure. The core logic of the dApp is the **"On-Chain Verification Loop."**

$$Link to our full Technical Architecture Diagram on Miro$$  
The process is as follows:

1. **User** completes a quest in the **Frontend** (Next.js).  
2. **User** clicks "Verify Quest" to call our **Backend API** (Node.js).  
3. **Backend** calls a blockchain API (e.g., Koios) to query the user's wallet.  
4. **Backend** parses the transaction history to confirm the quest's objective (e.g., "NFT with Policy ID X was received").  
5. If valid, **Backend** updates the **Database** (e.g., Supabase) and grants the user XP.  
6. **Frontend** shows a "Quest Complete\!" animation.

### **Tech Stack**

* **Frontend:** Next.js, React, Tailwind CSS  
* **Backend:** Node.js (as Next.js API Routes)  
* **Database:** Supabase (Postgres)  
* **Cardano Libs:** Lucid / Mesh.js  
* **Blockchain APIs:** Koios / Blockfrost  
* **3rd-Party Integration:** NMKR API/SDK

## **5\. How This Drives On-Chain Impact**

The goal of **ChainRunner** is to create a new generation of skilled Cardano builders. This drives on-chain impact in two ways:

1. **Directly:** Our learning loop (Quests 3-5) has the potential to generate thousands of **Testnet transactions**, creating a valuable, low-risk environment for experimentation. Quest 6, "Going Live\!," *requires every single user* to submit a **Mainnet transaction** to "graduate."  
2. **Indirectly (The Ecosystem Multiplier):** Our *real* impact is geometric. By successfully onboarding hundreds of new, qualified developers, we are **catalyzing the creation of the *next* generation of dApps, tools, and protocols** that will drive millions of future transactions.

## **6\. Project Status & Roadmap**

This project is currently in the **foundational work** phase. We have established our technical architecture, defined our prototype scope, and initialized this repository.

This README.md serves as our project's "lite whitepaper" and a living document for our vision and roadmap.

## **7\. License**

This project is open-source and released under the **MIT License**. We believe in building in public and welcome all contributions.
