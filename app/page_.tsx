import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import DashFresh from "./components/dashFresh";

export default function Home() {
  return (
    <section className="flex item-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 p-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Yooga - CXM
              </span>
            </span>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-5xl">
              Sua área de DashBoard e Monitoria!
            </h1>
            <div className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
              <DashFresh />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
