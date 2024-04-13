import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  //? className="bg-gradient-to-r from-gray-900 to-gray-800"
  return (
    <div className="w-full h-[calc(100dvh-60px)] bg-gradient-to-r from-gray-900 to-gray-700 flex justify-center items-center flex-col ">
      <div className="font-bold text-7xl">Web Compiler</div>
      <div className="mt-5">
        <p>
          Compile <span className=" font-bold text-red-500">HTML</span>,{" "}
          <span className="font-bold text-blue-500">CSS</span>, and{" "}
          <span className="font-bold text-yellow-500">JavaScript</span> on the
          go
        </p>
      </div>
      <Link to="/compiler">
        <Button variant="success" className="mt-4 bg-green-700">
          Get Started <MoveRight className="ml-3" />
        </Button>
      </Link>
    </div>
  );
}

export default Home;
