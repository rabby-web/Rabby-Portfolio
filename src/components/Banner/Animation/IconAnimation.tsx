// import IconCloud from "./IconCloud";
import IconCloud from "./IconCloud";
import { slugs } from "./slugsData";

export default function IconAnimation() {
  return (
    <div
      className="w-full md:p-16 px-6 pb-8 md:pb-0"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
