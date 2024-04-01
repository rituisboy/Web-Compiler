import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function RenderCode() {
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const html = `
    <html>
    <style>
    ${fullCode.css}
    </style>
    <body>
    ${fullCode.html}
    </body>
    <script>
    ${fullCode.javascript}
    </script>
    </html>
    `;

  return (
    <div className="h-[calc(100dvh-60px)]">
      <iframe
        loading="lazy"
        className="w-full h-full"
        title="html"
        srcDoc={html}
      />
    </div>
  );
}
