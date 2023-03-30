This is a web-based GUI created for Quaru, the quantum computer simulator created using Rust.
It uses webassembly to communicate with the simulator-library.

## Getting Started

First, make sure you have [wasm-pack](https://rustwasm.github.io/wasm-pack/) installed. This is needed to compile the rust library that the GUI uses.
Secondly, run the build:wasm command:
```bash
npm run build:wasm
# or
yarn build:wasm
# or
pnpm build:wasm
```

Then, run the development server:
```bash
npm run dev
# or
yarn dev  
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
