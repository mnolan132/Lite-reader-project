import { Heading, Text } from "@chakra-ui/react";

interface HalfBoldTextProps {
  children: string;
}

const HalfBoldText = ({ children }: HalfBoldTextProps) => {
  const words = children.split(" ");

  const modifiedWords = words.map((word, index) => {
    const halfLength = Math.floor(word.length / 2);
    const firstHalf = word.slice(0, halfLength);
    const secondHalf = word.slice(halfLength);

    // Add space after each word except for the last word
    const space = index !== words.length - 1 ? " " : "";

    return (
      <>
        <b>{firstHalf}</b>
        {secondHalf}
        {space}
      </>
    );
  });

  return (
    <Text pl={2} pr={2} textAlign="left">
      {modifiedWords}
    </Text>
  );
};

const About = () => {
  return (
    <section>
      <Heading as="h3" size="lg" textAlign="left">
        Welcome to Lite Reader Plus – Elevate Your Reading Comprehension and
        Speed to New Heights!{" "}
      </Heading>
      <br />

      <HalfBoldText>
        At Lite Reader Plus, we believe that reading should be an enjoyable and
        empowering experience for everyone. We have developed a groundbreaking
        tool that harnesses the power of technology to enhance reading skills,
        making it ideal for students, professionals, and individuals seeking to
        improve their reading abilities.
      </HalfBoldText>
      <br />
      <HalfBoldText>
        Our innovative concept, Lite Reader Plus, is designed to revolutionize
        the way you read and comprehend text. By utilizing advanced techniques
        and leveraging insights from visual cognition research, we have created
        a unique reading tool that takes your reading experience to the next
        level.
      </HalfBoldText>
      <br />

      <HalfBoldText>
        Lite Reader Plus introduces a powerful modification to the traditional
        reading process. By displaying the first half of each word in bold, our
        tool guides your eyes seamlessly through the text, resulting in a
        significant increase in reading speed while maintaining excellent
        comprehension and retention.
      </HalfBoldText>
      <br />

      <HalfBoldText>
        The benefits of Lite Reader Plus extend beyond speed alone. It has
        proven to be particularly effective for individuals with learning and
        reading disabilities, making it an invaluable resource for those facing
        challenges in their reading journey. By emphasizing critical parts of
        words, Lite Reader Plus empowers individuals to overcome obstacles and
        unlock their full reading potential.
      </HalfBoldText>
      <br />

      <HalfBoldText>
        However, Lite Reader Plus is not limited to those with learning
        challenges. It is a versatile tool that caters to students,
        professionals, and anyone seeking to optimize their reading skills.
        Whether you're studying for exams, conducting research, or simply
        managing your daily workload, Lite Reader Plus will help you read
        faster, absorb information more effectively, and save precious time.
      </HalfBoldText>
      <br />

      <HalfBoldText>
        Lite Reader Plus is designed with inclusivity in mind, ensuring that our
        user-friendly interface is accessible to all. Our mission is to empower
        individuals from diverse backgrounds to excel in their academic and
        professional pursuits, and we are dedicated to creating a reading
        environment that fosters growth and success.
      </HalfBoldText>
      <br />

      <HalfBoldText>
        Join us on this transformative journey and experience the power of Lite
        Reader Plus today. Unlock your full reading potential, elevate your
        comprehension, and embrace a new era of efficient reading!
      </HalfBoldText>
    </section>
  );
};

export default About;
