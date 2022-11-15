import React from 'react';
import {Text, View, Button, Colors} from 'react-native-ui-lib';
import AmountEntry from '../../components/AmountEntry';
import styles from '../../style/style';
import Balance from '../../components/Balances/Balance';

const LEAST_LIMIT = 0;

// Select the amount
const Transfer1Amount = ({
  nextStage,
  setAmount,
}: {
  nextStage: React.Dispatch<void>;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <View flex>
      <Text text40 style={styles.title} margin-30>
        Choose the Amount
      </Text>
      <View margin-20>
        <Balance />
      </View>
      <View marginH-30>
        <Text>How much would you like to send?</Text>
      </View>
      <View marginH-30>
        <AmountEntry setAmount={setAmount} least_limit={LEAST_LIMIT} />
      </View>
      <View flex bottom marginH-30 marginB-50>
        <Button
          onPress={nextStage}
          label="Continue to Confirmation"
          backgroundColor={styles.rcoin}
        />
      </View>
    </View>
  );
};

export default Transfer1Amount;
