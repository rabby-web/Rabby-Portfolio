// import IconCloud from "./IconCloud";
import IconCloud from "./IconCloud";
import { slugs } from "./slugsData";

export default function IconAnimation() {
  return (
    <div
      style={{
        width: 350,
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
