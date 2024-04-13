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
    <div className="bg-white h-[calc(100dvh-60px)]">
      <iframe className="w-full h-full" srcDoc={html} />
    </div>
  );
}
