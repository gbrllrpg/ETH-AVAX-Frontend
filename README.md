# ETH-AVAX-Frontend

This Solidity program is a simple program that demonstrates the functionality of the Solidity programming language using front-end and Metamask. The purpose of this program is to serve as a starting point for those who are new to Solidity and want to get a feel for how it works.

## Description

This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain.  It also used JS Script used in the front-end. The contract has cash-in and cash-out functions. It is a contract that can cash-in or cash-out any amount given by the user.

## Getting Started

### Executing program

1. To run this program, you can use Gitpod, an online workspace. To get started, go to the Gitpod website at https://www.gitpod.io/.
2. Once you are on the Gitpod website, add a new workspace, and paste the GitHub repository. Continue

3. Inside the project directory, in the terminal type: npm i
4. Open two additional terminals in your VS code
5. In the second terminal type: npx hardhat node
6. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
7. Back in the first terminal, type npm run dev to launch the front-end.
8. After this, the project will be running on your local host. Typically at http://localhost:3000/
   
9. Set up Metamask.
10. Import any of the accounts provided in the second terminal, using the private key.
11. Go to Gitpod Ports beside the Terminal. Copy the New RPC URL.
12. Click the 3 dots icon on the top right edge of Metamask.
13. Go to Setting -> Network -> Add Network - > Add a Network Manually.
14. Type any Network Name. Pase the New RPC URL.
15. In the Chain ID, type: 31337.
16. In the Currency symbol, type ETH.
17. Save.


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
