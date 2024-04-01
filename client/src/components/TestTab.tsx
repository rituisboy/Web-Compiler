import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CompilerSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function TestTab({ tabCurrentLang }) {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  return (
    <Tabs defaultValue={currentLanguage} className="w-[400px]">
      <TabsList className="gap-3">
        <TabsTrigger
          onClick={() => {
            const value = "html";
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType["currentLanguage"]
              )
            );
            tabCurrentLang("html");
          }}
          value="html"
        >
          Html
        </TabsTrigger>
        <TabsTrigger
          onClick={() => {
            const value = "css";
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType["currentLanguage"]
              )
            );
            tabCurrentLang("css");
          }}
          value="css"
        >
          Css
        </TabsTrigger>
        <TabsTrigger
          onClick={() => {
            const value = "javascript";
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType["currentLanguage"]
              )
            );
            tabCurrentLang("javascript");
          }}
          value="javascript"
        >
          JavaScript
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
