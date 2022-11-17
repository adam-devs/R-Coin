import { HStack, Text, Image, Box, Grid, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LeftPane = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <Grid gap={6}>
      <Image
        src="blockchain_loop.png"
        maxWidth="35%"
        justifySelf="center"
        fit="contain"
      />
      <Box justifySelf="center">
        <Link to={"/audit"} onClick={() => window.scrollTo(0, 0)}>
          <Button variant="reactive" size="lg">
            Check our Audit
          </Button>
        </Link>
      </Box>
      <Image
        src="parity.png"
        maxWidth="35%"
        justifySelf="center"
        fit="contain"
      />
      <Button
        justifySelf="center"
        variant="reactive"
        size="lg"
        onClick={onGetStarted}
      >
        Get Started
      </Button>
    </Grid>
  );
};

const AuditDescription = () => {
  return (
    <Box
      bg="white"
      justifySelf="right"
      alignItems="center"
      width="56%"
      height="fit-content"
      padding="3"
      borderRadius="25"
    >
      <Image src="transparency.png" maxWidth="350px" fit="contain" />
      <Text alignSelf="center">
        Every transaction we make is visible on the blockchain ensuring fair
        play. Our real-time auditing system shows every ZAR transfer flowing
        into and out of our reserve account and the corresponding on-chain
        transaction. This ensures that every RCoin we issue is backed by exactly
        1 Rand. That way all of our users can withdraw their Rand anytime,
        anywhere.
      </Text>
    </Box>
  );
};

const AuditExplanation = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <HStack>
      <LeftPane onGetStarted={onGetStarted} />
      <AuditDescription />
    </HStack>
  );
};

export default AuditExplanation;
