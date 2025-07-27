import { LayoutContainer } from "~/components/layout-container";
import { Sidebar } from "~/components/sidebar";
import { ContentArea } from "~/components/content-area";

export default function Home() {
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentArea />
    </LayoutContainer>
  );
}
