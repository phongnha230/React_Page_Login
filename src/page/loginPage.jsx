import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            Get more opportunities
          </CardTitle>

          {/* <CardDescription>
            Nhập email và mật khẩu để tiếp tục
          </CardDescription> */}

          <Button
            variant="outline"
            className="w-full mt-5 flex items-center gap-2 cursor-pointer justify-center"
          >
            <FcGoogle className="text-xl" />
            Sign up with Google
          </Button>
          {/* OR */}
          <div className="mt-3.5 flex items-center gap-2">
            <div className="h-px bg-border flex-1" />
            <span className="text-sm text-muted-foreground">
              Or sign up with email
            </span>
            <div className="h-px bg-border flex-1" />
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Full name */}
          <div className="space-y-3 ">
            <Label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Full name
            </Label>
            <Input id="name" type="name" placeholder="Enter your full name" />
          </div>

          {/* EMAIL */}
          <div className="space-y-3 ">
            <Label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address
            </Label>
            <Input id="email" type="email" placeholder="Enter email address" />
          </div>

          {/* PASSWORD */}
          <div className="space-y-1">
            <Label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Password
            </Label>
            <Input id="password" type="password" placeholder="Enter password" />
          </div>

          {/* LOGIN BUTTON */}
          <Button className="w-full cursor-pointer">Continue</Button>


          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login
            </a>
          </p>

          <CardDescription className="text-center">
            By clicking 'Continue', you acknowledge that you have read and
            accept the{" "}
            <a href="/terms" className="text-indigo-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
            .
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
