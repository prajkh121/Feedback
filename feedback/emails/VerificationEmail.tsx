import {
  Html,
  Head,
  Preview,
  Section,
  Row,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html>
      <Head>
        <title>Verification Code</title>
      </Head>
      <Preview> Here &apos;s your verification code: {otp}</Preview>
      <Section>
        <Row>
          <Text>
            Thank you for signing up, {username}! Your verification code is:{" "}
            <strong>{otp}</strong>
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
