import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import NumericInput from 'react-native-numeric-input'
import { Linking } from 'react-native';
import { selectedBuyToken } from "./BuyTokensScreen";

const BuyTokenDetail = ({ navigation }) => {
  const [buyAmount, setBuyAmount] = React.useState(100);
  const handleCoinBaseClick = () => {
    console.log("opening...");
    Linking.canOpenURL("https://pay.coinbase.com/buy/select-asset?appId=ab4b8829-a59d-44d3-accc-de77e4f18df2&attribution=extension&destinationWallets=%5B%7B%22address%22%3A%220x9381d7598f28fabd2f94aa9d01b4040c5f436197%22%2C%22assets%22%3A%5B%22ETH%22%2C%22USDC%22%2C%22DAI%22%5D%7D%5D").then(supported => {
      if (supported) {
        Linking.openURL("https://pay.coinbase.com/buy/select-asset?appId=ab4b8829-a59d-44d3-accc-de77e4f18df2&attribution=extension&destinationWallets=%5B%7B%22address%22%3A%220x9381d7598f28fabd2f94aa9d01b4040c5f436197%22%2C%22assets%22%3A%5B%22ETH%22%2C%22USDC%22%2C%22DAI%22%5D%7D%5D");
      } else {
        console.log("Don't know how to open URI: " + "https://pay.coinbase.com/buy/select-asset?appId=ab4b8829-a59d-44d3-accc-de77e4f18df2&attribution=extension&destinationWallets=%5B%7B%22address%22%3A%220x9381d7598f28fabd2f94aa9d01b4040c5f436197%22%2C%22assets%22%3A%5B%22ETH%22%2C%22USDC%22%2C%22DAI%22%5D%7D%5D");
      }
    });
  };
  const handleTransakClick = () => {
    console.log("opening...");
    Linking.canOpenURL("https://global.transak.com/?apiKey=25ac1309-a49b-4411-b20e-5e56c61a5b1c&hostURL=https%3A%2F%2Fmetamask.io&cryptoCurrencyList=ETH%2CUSDT%2CUSDC%2CDAI&defaultCryptoCurrency=ETH&networks=ethereum&walletAddress=0x9381d7598f28fabd2f94aa9d01b4040c5f436197").then(supported => {
      if (supported) {
        Linking.openURL("https://global.transak.com/?apiKey=25ac1309-a49b-4411-b20e-5e56c61a5b1c&hostURL=https%3A%2F%2Fmetamask.io&cryptoCurrencyList=ETH%2CUSDT%2CUSDC%2CDAI&defaultCryptoCurrency=ETH&networks=ethereum&walletAddress=0x9381d7598f28fabd2f94aa9d01b4040c5f436197");
      } else {
        console.log("Don't know how to open URI: " + "https://global.transak.com/?apiKey=25ac1309-a49b-4411-b20e-5e56c61a5b1c&hostURL=https%3A%2F%2Fmetamask.io&cryptoCurrencyList=ETH%2CUSDT%2CUSDC%2CDAI&defaultCryptoCurrency=ETH&networks=ethereum&walletAddress=0x9381d7598f28fabd2f94aa9d01b4040c5f436197");
      }
    });
  };
  const handleMoonPayClick = () => {
    console.log("opening...");
    Linking.canOpenURL("https://pay.sendwyre.com/purchase?accountId=AC-7AG3W4XH4N2&utm_campaign=AC-7AG3W4XH4N2&destCurrency=ETH&utm_medium=widget&paymentMethod=debit-card&reservation=3JF2YNPNBDALQX2UVR27&autoRedirect=false&dest=ethereum%3A0x9381d7598f28fabd2f94aa9d01b4040c5f436197&utm_source=checkout").then(supported => {
      if (supported) {
        Linking.openURL("https://pay.sendwyre.com/purchase?accountId=AC-7AG3W4XH4N2&utm_campaign=AC-7AG3W4XH4N2&destCurrency=ETH&utm_medium=widget&paymentMethod=debit-card&reservation=3JF2YNPNBDALQX2UVR27&autoRedirect=false&dest=ethereum%3A0x9381d7598f28fabd2f94aa9d01b4040c5f436197&utm_source=checkout");
      } else {
        console.log("Don't know how to open URI: " + "https://pay.sendwyre.com/purchase?accountId=AC-7AG3W4XH4N2&utm_campaign=AC-7AG3W4XH4N2&destCurrency=ETH&utm_medium=widget&paymentMethod=debit-card&reservation=3JF2YNPNBDALQX2UVR27&autoRedirect=false&dest=ethereum%3A0x9381d7598f28fabd2f94aa9d01b4040c5f436197&utm_source=checkout");
      }
    });
  };
  const handleWireClick = () => {
    console.log("opening...");
    Linking.canOpenURL("https://pay.sendwyre.com/purchase?accountId=AC-7AG3W4XH4N2&utm_campaign=AC-7AG3W4XH4N2&destCurrency=ETH&utm_medium=widget&paymentMethod=debit-card&reservation=EAXZNRULNJRMYZZVM2EZ&autoRedirect=false&dest=ethereum%3A0x9381d7598f28fabd2f94aa9d01b4040c5f436197&utm_source=checkout").then(supported => {
      if (supported) {
        Linking.openURL("https://pay.sendwyre.com/purchase?accountId=AC-7AG3W4XH4N2&utm_campaign=AC-7AG3W4XH4N2&destCurrency=ETH&utm_medium=widget&paymentMethod=debit-card&reservation=EAXZNRULNJRMYZZVM2EZ&autoRedirect=false&dest=ethereum%3A0x9381d7598f28fabd2f94aa9d01b4040c5f436197&utm_source=checkout");
      } else {
        console.log("Don't know how to open URI: " + "https://pay.sendwyre.com/purchase?accountId=AC-7AG3W4XH4N2&utm_campaign=AC-7AG3W4XH4N2&destCurrency=ETH&utm_medium=widget&paymentMethod=debit-card&reservation=EAXZNRULNJRMYZZVM2EZ&autoRedirect=false&dest=ethereum%3A0x9381d7598f28fabd2f94aa9d01b4040c5f436197&utm_source=checkout");
      }
    });
  };
  return (

    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText> Buy {selectedBuyToken.toUpperCase()}</HeaderText>
      </Header>
      <Body>
        <Token>
          <TokenDetails>
            <Image source={require("../assets/images/eth.png")} />
            <TokenNamePrice>
              <TokenName>{selectedBuyToken}</TokenName>
              <TokenPriceAction>
                <TokenPrice>$1597</TokenPrice>
                <TokenPercent>+0.0997 %</TokenPercent>
              </TokenPriceAction>
            </TokenNamePrice>
          </TokenDetails>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>{selectedBuyToken}</TokenSymbol>
          </TokenCol2>
        </Token>
        <CoinbaseImage source={require("../assets/images/coinbase.png")}></CoinbaseImage>
        <TouchableOpacity onPress={() => handleCoinBaseClick()}>
          <Button>  Continue to CoinBase Pay </Button>
        </TouchableOpacity>
        <Transak source={require("../assets/images/transak.png")}></Transak>
        <TouchableOpacity onPress={() => handleTransakClick()}>
          <Button>  Continue to Transak  </Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMoonPayClick()}>
          <Button>  Continue to MoonPay  </Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleWireClick()}>
          <Button>  Continue to Wire  </Button>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

export default BuyTokenDetail;

const CoinbaseImage = styled.Image`
  width: 350px;
  height: 150px;
`;
const Transak = styled.Image`
  width: 370px;
  height: 220px;
`;
const CoinBaseInfo = styled.Text`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size:30px;
`;
const CoinBaseHeder = styled.Text`
  margin: auto;
`;
const CoinBase = styled.Text`
  font-size: 40px;
  font-weight:bold;
  color : #3355cc;
`;
const CoinBaseRow = styled.View`
  width: 50%;
  margin: auto;
`
const CoinBaseDetail = styled.Text`
  font-size: 20px;
  color: #989898;
`;
const CoinBaseSmallDetail = styled.Text`
  font-size: 15px;
  color: #989898;
`;
const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px;
  flex-direction: row;
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
const Body = styled.View`
  width: 90%;
  margin-left: 5%;
`;
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

const TokenDetails = styled.View`
  flex-direction: row;
`;
const TokenName = styled.Text`
  color: #3275bb;
  text-transform: uppercase;
  margin-left: 10px;
  font-weight: bold;
`;
const PriceUSD = styled.Text`
`;
const SText = styled.Text`
  margin:auto;
  margin-top: 100px;
  font-size: 50px;
`;

const CryptoInfo = styled.Text`
  margin: auto;
  margin-top: 5px;
  color: #555;
  font-size: 15px;
`;
const AmountInUSD = styled.Text`
  color: #979797;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
const Token = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
`;
const TokenNamePrice = styled.View`
  margin-left: 15px;
`;
const TokenPriceAction = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
const TokenAmount = styled.Text`
  font-size: 18px;
`;
const TokenSymbol = styled.Text`
  font-size: 18px;
  margin-left: 5px;
`;
const TokenCol2 = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TokenPrice = styled.Text`
  font-size: 12px;
  color: #979797;
`;
const TokenPercent = styled.Text`
  font-size: 12px;
  color: #6eb8aa;
  margin-left: 8px;
`;

const PaymentButton = styled.Text`
  width: 300px;
  padding: 20px 0;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  background: #3275bb;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin: 35px auto 0 auto;
`;


const Button = styled.Text`
  width: 300px;
  padding: 20px 0;
  background: #3275bb;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin: 30px auto 0 auto;
`;
