import DefaultLayout from "@/layouts/default";
import { VStack, Text } from "@chakra-ui/react";
import "@/styles/spinner.css";

export default function WipPage() {
  return (
    <DefaultLayout>
      <VStack gap={2} minH="60vh" justifyContent="center" alignItems="center">
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold" color="#595858">
          working on it!
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="#ADADAD" textAlign="center">
          sorry, developing this page asap!!!
        </Text>
        <div className="loadingio-spinner-bean-eater-2by998twmg8" style={{ filter: "drop-shadow(0 4px 12px rgba(0,94,138,0.25))" }}>
          <div className="ldio-yzaezf3dcmj">
            <div>
              <div /><div /><div />
            </div>
            <div>
              <div /><div /><div />
            </div>
          </div>
        </div>
      </VStack>
    </DefaultLayout>
  );
}
