import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from "ethers";
const provider = ethers.getDefaultProvider("ropsten");

const contract_address = "";
const send_token_amount = "1";
const to_address = "0x0b486fe115a457138C6FF624F42d0671ceB02e5B";
const send_address = "0x9381D7598F28fAbd2f94Aa9d01B4040C5F436197"
const private_key = "69b2ce785561f97e2aa896e67f6f61e9c8442a9f11b3cbb476439219141db91f";
const gas_limit = "0x100000";

window.ethersProvider = new ethers.providers.InfuraProvider("ropsten")
const SendTokenFormScreen = ({ navigation }) => {
  const [recipentAddress, setRecipentAddress] = React.useState(null);
  const [amount, setAmount] = React.useState('0.0');
  const sendToken = () => {
    send_token(contract_address, send_token_amount, to_address, send_address, private_key);
    // console.log("Sending to : " + recipentAddress + " with " + amount);
    // let privateKey = '69b2ce785561f97e2aa896e67f6f61e9c8442a9f11b3cbb476439219141db91f' // ba777afd45b2b4db18f2ac061c0a7b556c77eddb3a67408cd91fc20ea2e97760
    // // Create a wallet instance
    // let wallet = new ethers.Wallet(privateKey, provider)
    // // Receiver Address which receives Ether
    // let receiverAddress = receiverAddress;
    // // Ether amount to send
    // let amountInEther = amount;
    // // Create a transaction object
    // let tx = {
    //   to: receiverAddress,
    //   // Convert currency unit from ether to wei
    //   value: ethers.utils.parseEther(amountInEther)
    // }
    // // Send a transaction
    // wallet.sendTransaction(tx)
    //   .then((txObj) => {
    //     console.log('txHash', txObj.hash)
    //     // => 0x9c172314a693b94853b49dc057cf1cb8e529f29ce0272f451eea8f5741aa9b58
    //     // A transaction result can be checked in a etherscan with a transaction hash which can be obtained here.
    //   })
  }
  function send_token(
    contract_address,
    send_token_amount,
    to_address,
    send_account,
    private_key
  ) {
    console.log("send transaction");
    let wallet = new ethers.Wallet(private_key)
    let walletSigner = wallet.connect(window.ethersProvider)

    window.ethersProvider.getGasPrice().then((currentGasPrice) => {
      let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice))
      console.log(`gas_price: ${gas_price}`)

      if (contract_address) {
        console.log('if');
        // general token send
        let contract = new ethers.Contract(
          contract_address,
          send_abi,
          walletSigner
        )

        // How many tokens?
        let numberOfTokens = ethers.utils.parseUnits(send_token_amount, 18)
        console.log(`numberOfTokens: ${numberOfTokens}`)

        // Send tokens
        contract.transfer(to_address, numberOfTokens).then((transferResult) => {
          console.dir(transferResult)
          alert("sent token")
        })
      } // ether send
      else {
        console.log('else');
        const tx = {
          from: send_account,
          to: to_address,
          value: ethers.utils.parseEther(send_token_amount),
          nonce: window.ethersProvider.getTransactionCount(
            send_account,
            "latest"
          ),
          gasLimit: ethers.utils.hexlify(gas_limit), // 100000
          gasPrice: gas_price,
        }
        console.log(tx)
        try {
          walletSigner.sendTransaction(tx).then((transaction) => {
            console.log(transaction)
            alert("Send finished!")
          })
        } catch (error) {
          alert("failed to send!!")
        }
      }
    })
  }
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText>Send BTC</HeaderText>
        <Continue onPress={() => sendToken()}>Continue</Continue>
      </Header>
      <Body>
        <RecipientInfoContainer>
          <Recipient>
            <RecipientAddress placeholder="Recipient Address" value={recipentAddress} onChangeText={setRecipentAddress} />
            <Paste>
              <Ionicons name={"clipboard-outline"} color="#3275bb" size={24} />
              <PasteText>Paste</PasteText>
            </Paste>
          </Recipient>
          <AmountContainer>
            <Amount placeholder="Amount BTC" value={amount} onChangeText={setAmount} />
            <MaxContainer>
              <Max>Max</Max>
              <TokenName>BTC</TokenName>
            </MaxContainer>
          </AmountContainer>
          <AmountInUSD>~$146,577,914.13</AmountInUSD>
        </RecipientInfoContainer>
      </Body>
    </Container>
  );
};

export default SendTokenFormScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;
`;
const HeaderText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
const Continue = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`;
const Body = styled.View``;
const RecipientInfoContainer = styled.View`
  padding: 0 20px 0 20px;
  margin: 0 10px;
`;
const Recipient = styled.View`
  height: 60px;
  border-color: #eaeaea;
  border-width: 1px;
  border-radius: 5px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 30px 0;
`;
const RecipientAddress = styled.TextInput`
  height: 60px;
  font-size: 16px;
`;
const Paste = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const PasteText = styled.Text`
  color: #3275bb;
  text-transform: uppercase;
  margin-left: 10px;
  font-weight: bold;
`;
const AmountContainer = styled.View`
  height: 60px;
  border-color: #eaeaea;
  border-width: 1px;
  border-radius: 5px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 30px 0;
`;
const Amount = styled.TextInput`
  height: 60px;
  font-size: 16px;
`;
const MaxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Max = styled.Text`
  color: #3275bb;
  text-transform: uppercase;
  font-weight: bold;
`;
const TokenName = styled.Text`
  color: #3275bb;
  text-transform: uppercase;
  margin-left: 10px;
  font-weight: bold;
`;
const AmountInUSD = styled.Text`
  color: #979797;
`;
