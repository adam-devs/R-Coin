import {
  Box,
  Text,
  Button,
  Flex,
  Grid,
  Image,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import InformationPane from "../../Common/InformationPane";

const WorkflowStageCard = ({
  text,
  description,
  index,
  image,
  footerButton,
}: {
  text: string;
  description: string;
  index: number;
  image: string;
  footerButton: any;
}) => {
  const useMobileView = useBreakpointValue({
    base: true,
    md: false,
  });

  const cardDirection = useMobileView ? "column" : "row";
  const width = useMobileView ? "100%" : "1080px";

  return (
    <Grid
      // bg="rcoinBlue.50"
      // borderRadius="25px"
      width={width}
      alignContent="stretch"
      gap={0}
    >
      <HStack>
        <Text
          // marginTop="10px"
          marginRight="10px"
          fontSize="110px"
          fontWeight="bold"
          color="rcoinBlue.1000"
        >
          {" "}
          {index}{" "}
        </Text>
        <Box
          textAlign="left"
          fontSize="4xl"
          fontWeight="bold"
          color="rcoinBlue.1000"
          marginLeft="10px"
        >
          {" "}
          {text}{" "}
        </Box>
      </HStack>
      <Box maxWidth="200px" justifySelf="left" marginTop={"-30px"}>
        <Image src={image} maxWidth="250px" />
      </Box>

      <Text textAlign="left" color="rcoinBlue.1000" marginBottom="25px">
        {description}
      </Text>
      <Box
        marginBottom="10px"
        marginRight="10px"
        alignSelf="center"
        justifySelf="center"
      >
        {footerButton}{" "}
      </Box>
    </Grid>
  );
};

const workflowHeadings = [
  "Make a Deposit",
  "Transfer RCoin",
  "Withdraw your funds",
];
const workflowImages = ["ZtoR.png", "RtoR.png", "RtoZ.png"];

const depositDescription = (
  <Text>
    {" "}
    To get started, simply purchase RCoin using your Paystack account*. We will
    then issue an equal number of RCoin into your token account. After that you
    can exchange RCoin with other users free of charge.
  </Text>
);
const transferDescription = (
  <Text>
    Harness the power of on-chain transactions. Thanks to the speed of Solana
    blockchain you can transfer RCoin instantly. We'll cover all on-chain
    transaction fees. You can send RCoin to any other user, simply enter the
    email of the account and choose the amount.
  </Text>
);
const withdrawDescription = (
  <Text>
    Thanks to our real-time auditing system, you can be sure that all of your
    RCoin are fully backed by Rand in our reserve account. Therefore, every user
    can withdraw RCoin as Rand at any time. The transaction will appear on both
    your account’s history and the real time audit.
  </Text>
);

const workflowStageDescriptions = [
  depositDescription,
  transferDescription,
  withdrawDescription,
];

const paystackButton = (
  <Button
    variant="reactiveDark"
    onClick={() => {
      window.open("https://paystack.com");
    }}
  >
    Learn More About Paystack{" "}
    <Image marginLeft="4px" src="paystack.png" maxWidth="20px" fit="contain" />
  </Button>
);
const solanaSpeedButton = (
  <Button
    variant="reactiveDark"
    onClick={() => {
      window.open("https://explorer.solana.com");
    }}
  >
    Check Solana Speed{" "}
    <Image fit="contain" marginLeft="4px" src="solana.png" maxWidth="20px" />
  </Button>
);

const auditButton = (
  <Link to={"/audit"}>
    {" "}
    <Button variant="reactiveDark" onClick={() => window.scrollTo(0, 0)}>
      {" "}
      Check our Audit{" "}
    </Button>{" "}
  </Link>
);

const GetStartedPage = () => {
  const workflowButtons = [paystackButton, solanaSpeedButton, auditButton];

  let gridContents = [];
  for (let i = 0; i < 3; i++) {
    gridContents.push(
      <WorkflowStageCard
        text={workflowHeadings[i]}
        description={workflowStageDescriptions[i].props.children}
        image={workflowImages[i]}
        index={i + 1}
        footerButton={workflowButtons[i]}
      />
    );
  }
  return (
    <Box fontSize="xl">
      <InformationPane colour={"rcoinBlue.1100"}>
        <Text
          marginTop="30px"
          marginBottom="25px"
          fontSize="50px"
          fontWeight="bold"
          color="rcoinBlue.1000"
        >
          How you can use RCoin
        </Text>
        <Grid
          minH="100vh"
          maxW="1080px"
          marginLeft="auto"
          marginRight="auto"
          justifyItems="stretch"
          gap={3.5}
          p={3}
        >
          {gridContents}
        </Grid>
        <Box margin="auto" width="fit-content">
          <Link to={"/download"}>
            <Button
              align-self="center"
              variant={"reactive"}
              onClick={() => window.scrollTo(0, 0)}
            >
              Download The App
            </Button>
          </Link>
        </Box>
        <Box fontSize="xs" textAlign="right" color={"rcoinBlue.1000"}>
          *Fees apply.
        </Box>
      </InformationPane>
    </Box>
  );
};

export default GetStartedPage;
