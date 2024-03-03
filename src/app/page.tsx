import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <head>
      <title>Home</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" href="./favicon.ico"/>
    </head>
    <body className="bg-white text-center">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500">
        <Navbar></Navbar>
      </div>
    </body>
    </>
  );
}
