# ETH-AVAX-Frontend

This Solidity program is a simple program that demonstrates the functionality of the Solidity programming language using front-end and Metamask. The purpose of this program is to serve as a starting point for those who are new to Solidity and want to get a feel for how it works.

## Description

This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain.  It also used JS Script used in the front-end. The contract has deposit and withdrawal functions. It is a contract that can deposit or withdraw any amount given by the user.

## Getting Started

### Executing program

1. To run this program, you can use Gitpod, an online workspace. To get started, go to the Gitpod website at https://www.gitpod.io/.
2. Once you are on the Gitpod website, add a new workspace, and paste the GitHub repository. Continue
   
4. Set up Metamask.
5. Import any of the accounts provided in the second terminal, using the private key.
   
6. Go to Gitpod Ports beside the Terminal. Copy the New RPC URL.
7. Click the 3 dots icon on the top right edge of Metamask.
8. Go to Setting -> Network -> Add Network - > Add a Network Manually.
9. Type any Network Name. Pase the New RPC URL.
10. In the Chain ID, type: 31337.
11. In the Currency symbol, type ETH.
12. Save.

13. Inside the project directory, in the terminal type: npm i
14. Open two additional terminals in your VS code
15. In the second terminal type: npx hardhat node
16. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
17. Back in the first terminal, type npm run dev to launch the front-end.
18. After this, the project will be running on your local host. Typically at http://localhost:3000/


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
