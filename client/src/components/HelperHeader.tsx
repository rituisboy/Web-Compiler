import { Button } from "./ui/button";
import { Check, Code, Copy, LoaderCircle, Save, Share2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import {
  CompilerSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { RootState } from "@/redux/store";
import TestTab from "./TestTab";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function HelperHeader() {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [shareBtn, setshareBtn] = useState(false);
  const [copiedCheck, setCopiedCheck] = useState(false);
  const navigate = useNavigate();
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const handleSaveCode = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/compiler/save", {
        fullCode,
      });
      console.log(response.data);
      navigate(`/compiler/${response.data.url}`, { replace: true });
    } catch (error) {
      handleError(error);
    } finally {
      setSaveLoading(false);
    }
  };
  const { urlId } = useParams();
  useEffect(() => {
    if (urlId) {
      setshareBtn(true);
    }
  }, [urlId]);

  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const dispatch = useDispatch();
  return (
    <div className="__helper_header h-[50px] text-white flex bg-black p-2 justify-between items-center ">
      <div className="__btn_container flex gap-1">
        <Button
          onClick={handleSaveCode}
          className="flex justify-center items-center gap-1"
          variant="success"
          disabled={saveLoading}
        >
          {saveLoading ? (
            <>
              <LoaderCircle className="animate-spin" /> saving...
            </>
          ) : (
            <>
              <Save size={16} /> save{" "}
            </>
          )}
        </Button>
        {shareBtn && (
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="secondary">
                <Share2 size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex gap-1 justify-center items-center">
                  <Code />
                  Share your Code!
                </DialogTitle>
                <div className="__url flex justify-center items-center gap-1 ">
                  <input
                    style={{ userSelect: "none" }}
                    disabled
                    className="select-none peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    value={window.location.href}
                  />

                  <Button
                    disabled={copiedCheck}
                    variant="outline"
                    className="h-full"
                    onClick={() => {
                      setCopiedCheck(true);
                      window.navigator.clipboard.writeText(
                        window.location.href
                      );
                      toast("URL Copied to your clipboard!");
                      setInterval(() => {
                        setCopiedCheck(false);
                      }, 500);
                    }}
                  >
                    {copiedCheck ? <Check size={16} /> : <Copy size={14} />}
                  </Button>
                </div>
                <p className="text-center text-slate-400 text-xs">
                  Share this URL with your friends to collaborate.
                </p>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}

        <div className="flex justify-center items-center ml-3">
          <TestTab />
        </div>
      </div>

      <div className="__tab_switcher flex justify-center items-center gap-1">
        <small>Current Language: </small>
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) => {
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType["currentLanguage"]
              )
            );
          }}
        >
          <SelectTrigger className="w-[120px] bg-gray-800 focus:ring-0 select-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
