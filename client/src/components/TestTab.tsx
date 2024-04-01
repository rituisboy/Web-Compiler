import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CompilerSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function TestTab() {
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
          }}
          value="javascript"
        >
          JavaScript
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
