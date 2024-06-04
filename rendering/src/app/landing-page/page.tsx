import { Navbar } from "@/components/navbar";

// NOTE: The puprose of this is to demonstrate that the component tree should be structured such that the ends of the tree should contain client components, while the trunk and branches should
// be server components. But the way Next JS works is that any component that has "use Client" will have all its sub-tree of child components coerced to become client components. For this case, using
// "use client" in here or in the "Navbar" component is a bad idea. Its better to use it in the bottom-most level i.e in "NavSearch", which requires states.
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Page heading</h1>
      </main>
    </>
  );
}