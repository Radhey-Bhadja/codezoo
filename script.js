/**
 * CodeZoo — Minimalist Page-Based Logic
 * Clean tab navigation, compact card grid, side-by-side compare, and stack quiz.
 */

const languages = [
  {
    name: "Python",
    year: "1991",
    type: "AI & Scripting",
    category: "data",
    icon: "🐍",
    nick: "Friendly & Rapid",
    difficulty: "Easy",
    strength: "Huge ML & AI ecosystem, instant prototyping",
    weakness: "Slower execution speed & GIL",
    desc: "Readable, indentation-based syntax that feels like pseudocode. The go-to for modern AI and data work.",
    uses: ["Machine Learning", "PyTorch", "FastAPI", "Automation"],
    code: `def greet(name: str) -> str:\n    return f"Hello, {name}!"\n\nprint(greet("World"))`,
    url: "https://www.python.org/"
  },
  {
    name: "Rust",
    year: "2015",
    type: "Systems & Native",
    category: "systems",
    icon: "🦀",
    nick: "Fearless Concurrency",
    difficulty: "Hard",
    strength: "Compile-time memory safety without garbage collection",
    weakness: "Steep learning curve and strict borrow checker",
    desc: "Blazing fast systems language that prevents memory corruption before code ever runs.",
    uses: ["OS Kernels", "WebAssembly", "Cloud Tools", "Fintech"],
    code: `fn main() {\n    let msg = "Fast & safe";\n    println!("{msg}");\n}`,
    url: "https://www.rust-lang.org/"
  },
  {
    name: "TypeScript",
    year: "2012",
    type: "Web & Fullstack",
    category: "frontend",
    icon: "TS",
    nick: "Typed JavaScript",
    difficulty: "Medium",
    strength: "Catches bugs early with static types & great tooling",
    weakness: "Requires build/transpilation step",
    desc: "JavaScript with static types. Now the default standard for building modern web applications.",
    uses: ["React", "Next.js", "Node.js", "Web APIs"],
    code: `interface User {\n  id: number;\n  name: string;\n}\n\nconst u: User = { id: 1, name: "Radhey" };`,
    url: "https://www.typescriptlang.org/"
  },
  {
    name: "JavaScript",
    year: "1995",
    type: "Web Standard",
    category: "frontend",
    icon: "JS",
    nick: "The Browser Engine",
    difficulty: "Easy → Medium",
    strength: "Runs in every browser natively, massive package library",
    weakness: "Dynamic quirks and unexpected type coercions",
    desc: "The universal language of the web that powers browsers, servers, and fullstack apps.",
    uses: ["Websites", "Node.js", "Interactive UI", "Electron"],
    code: `const fetchJson = async (url) => {\n  const res = await fetch(url);\n  return res.json();\n};`,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "Go",
    year: "2009",
    type: "Cloud & Backend",
    category: "backend",
    icon: "GO",
    nick: "Simple & Concurrent",
    difficulty: "Medium",
    strength: "Lightweight goroutines, fast builds, clean standard library",
    weakness: "Repetitive error handling checks",
    desc: "Designed at Google for cloud microservices, Docker, Kubernetes, and network services.",
    uses: ["Kubernetes", "Docker", "Microservices", "APIs"],
    code: `package main\nimport "fmt"\n\nfunc main() {\n    go fmt.Println("Running in goroutine")\n}`,
    url: "https://go.dev/"
  },
  {
    name: "C++",
    year: "1985",
    type: "Systems & Games",
    category: "systems",
    icon: "C++",
    nick: "Maximum Performance",
    difficulty: "Hard",
    strength: "Direct hardware control and deterministic memory",
    weakness: "Vast language complexity and potential memory leaks",
    desc: "The powerhouse behind 3D game engines (Unreal), browsers, and low-latency trading.",
    uses: ["Game Engines", "Graphics", "Finance", "OS Kernels"],
    code: `#include <iostream>\nint main() {\n    std::cout << "Fast execution\\n";\n    return 0;\n}`,
    url: "https://isocpp.org/"
  },
  {
    name: "C",
    year: "1972",
    type: "Low-Level & OS",
    category: "systems",
    icon: "C",
    nick: "The Foundation",
    difficulty: "Medium → Hard",
    strength: "Predictable, minimal runtime overhead, runs anywhere",
    weakness: "Manual memory allocation (malloc/free)",
    desc: "Dennis Ritchie's classic that powers Linux, Git, SQLite, and embedded microcontrollers.",
    uses: ["Linux Kernel", "Embedded Systems", "Firmware", "Interpreters"],
    code: `#include <stdio.h>\nint main() {\n    printf("Bare metal control\\n");\n    return 0;\n}`,
    url: "https://en.cppreference.com/w/c"
  },
  {
    name: "C#",
    year: "2000",
    type: "Enterprise & Games",
    category: "backend",
    icon: "C#",
    nick: "Modern & Polished",
    difficulty: "Medium",
    strength: "Great .NET tooling, LINQ queries, and Unity engine support",
    weakness: "Large framework ecosystem to learn",
    desc: "Microsoft's flagship language for cloud APIs, desktop apps, and indie video games.",
    uses: ["Unity Engine", "ASP.NET Core", "Enterprise", "Desktop"],
    code: `record User(string Name, int Id);\nvar user = new User("Radhey", 101);\nConsole.WriteLine(user.Name);`,
    url: "https://learn.microsoft.com/dotnet/csharp/"
  },
  {
    name: "Java",
    year: "1995",
    type: "Enterprise & Cloud",
    category: "backend",
    icon: "☕",
    nick: "The Enterprise Workhorse",
    difficulty: "Medium",
    strength: "Battle-tested reliability, JVM optimizations, vast libraries",
    weakness: "More verbose syntax compared to modern alternatives",
    desc: "Longstanding rock for big banks, enterprise backends, and distributed streaming (Kafka, Spark).",
    uses: ["Spring Boot", "Banking", "Apache Kafka", "Android"],
    code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("JVM Ready");\n    }\n}`,
    url: "https://www.java.com/"
  },
  {
    name: "Kotlin",
    year: "2011",
    type: "Mobile & JVM",
    category: "mobile",
    icon: "KT",
    nick: "Modern Android",
    difficulty: "Medium",
    strength: "Concise syntax, built-in null safety, 100% Java interop",
    weakness: "Build configurations can get complex",
    desc: "Google's preferred modern language for native Android mobile app development.",
    uses: ["Android Apps", "Jetpack Compose", "Server Backends", "Multiplatform"],
    code: `data class Item(val title: String, val price: Double)\nval cart = listOf(Item("Coffee", 3.5))\nprintln(cart.first())`,
    url: "https://kotlinlang.org/"
  },
  {
    name: "Swift",
    year: "2014",
    type: "Apple Platforms",
    category: "mobile",
    icon: "SW",
    nick: "Fast & Clean",
    difficulty: "Medium",
    strength: "Clean syntax, fast native speed, SwiftUI declarative UI",
    weakness: "Heavily centered around the Apple ecosystem",
    desc: "Apple's modern language designed for building apps across iPhone, iPad, Mac, and Apple Watch.",
    uses: ["iOS Apps", "SwiftUI", "macOS Software", "watchOS"],
    code: `struct Card {\n    let title: String\n}\nlet c = Card(title: "CodeZoo")\nprint(c.title)`,
    url: "https://www.swift.org/"
  },
  {
    name: "Dart",
    year: "2011",
    type: "Cross-Platform",
    category: "mobile",
    icon: "🎯",
    nick: "Flutter's Engine",
    difficulty: "Easy → Medium",
    strength: "Hot reload and fast ahead-of-time compilation for mobile",
    weakness: "Rarely used outside the Flutter framework",
    desc: "Client-optimized language from Google used by Flutter to build iOS and Android apps simultaneously.",
    uses: ["Flutter", "Cross-platform Mobile", "Desktop UI"],
    code: `void main() {\n  final platforms = ['iOS', 'Android', 'Web'];\n  print(platforms.join(', '));\n}`,
    url: "https://dart.dev/"
  },
  {
    name: "PHP",
    year: "1995",
    type: "Web Backend",
    category: "backend",
    icon: "PHP",
    nick: "The Web Backbone",
    difficulty: "Easy → Medium",
    strength: "Zero-friction hosting, modern Laravel framework",
    weakness: "Historical baggage in legacy codebases",
    desc: "Powers a massive portion of the web including WordPress, Drupal, and modern Laravel services.",
    uses: ["Laravel", "WordPress", "Web APIs", "E-commerce"],
    code: `<?php\n$routes = ['/', '/explore', '/about'];\necho "Active routes: " . count($routes);`,
    url: "https://www.php.net/"
  },
  {
    name: "Ruby",
    year: "1995",
    type: "Web & Scripting",
    category: "scripting",
    icon: "💎",
    nick: "Developer Happiness",
    difficulty: "Easy",
    strength: "Expressive human-friendly syntax, rapid development with Rails",
    weakness: "Lower raw execution speed than compiled stacks",
    desc: "Designed to optimize for developer joy. Famous for launching GitHub, Shopify, and Airbnb with Rails.",
    uses: ["Ruby on Rails", "Web Startups", "Automation", "CLI Tools"],
    code: `5.times { |i| puts "Step #{i + 1}" }\nuser = { name: "Radhey", role: "Dev" }`,
    url: "https://www.ruby-lang.org/"
  },
  {
    name: "SQL",
    year: "1974",
    type: "Relational Query",
    category: "database",
    icon: "SQL",
    nick: "The Data Standard",
    difficulty: "Easy → Medium",
    strength: "Standard declarative querying, ACID transactions",
    weakness: "Dialect quirks between Postgres, MySQL, Oracle",
    desc: "The universal language for querying and organizing relational databases across every industry.",
    uses: ["PostgreSQL", "MySQL", "Data Analytics", "Backend Storage"],
    code: `SELECT name, year FROM languages\nWHERE category = 'systems'\nORDER BY year ASC;`,
    url: "https://en.wikipedia.org/wiki/SQL"
  },
  {
    name: "Haskell",
    year: "1990",
    type: "Pure Functional",
    category: "functional",
    icon: "λ",
    nick: "Pure & Immutable",
    difficulty: "Hard",
    strength: "Mathematical guarantees, lazy evaluation, robust type safety",
    weakness: "Monads steep conceptual cliff for beginners",
    desc: "A purely functional language where functions have zero hidden side effects.",
    uses: ["Compilers", "Fintech", "Academic Research", "Cryptography"],
    code: `fibs = 0 : 1 : zipWith (+) fibs (tail fibs)\nmain = print (take 8 fibs)`,
    url: "https://www.haskell.org/"
  },
  {
    name: "Elixir",
    year: "2012",
    type: "Real-time & Concurrency",
    category: "functional",
    icon: "💧",
    nick: "Fault-Tolerant",
    difficulty: "Medium",
    strength: "Erlang BEAM reliability, great concurrency, Phoenix LiveView",
    weakness: "Smaller talent pool than Python or JS",
    desc: "Combines Ruby-like syntax with Erlang's battle-tested telecommunication server engine.",
    uses: ["Discord Backends", "Phoenix LiveView", "Real-time Messaging", "IoT"],
    code: `[1, 2, 3]\n|> Enum.map(&(&1 * 2))\n|> IO.inspect()`,
    url: "https://elixir-lang.org/"
  },
  {
    name: "Zig",
    year: "2016",
    type: "Modern Systems",
    category: "systems",
    icon: "⚡",
    nick: "Explicit & Simple",
    difficulty: "Hard",
    strength: "No hidden memory control flow, compiles C code out of the box",
    weakness: "Young language undergoing active pre-1.0 changes",
    desc: "A modern alternative to C that emphasizes simplicity, explicit allocators, and comptime execution.",
    uses: ["Bun JS Runtime", "Embedded", "Systems Tools", "Game Tech"],
    code: `const std = @import("std");\npub fn main() void {\n    std.debug.print("Explicit memory\\n", .{});\n}`,
    url: "https://ziglang.org/"
  },
  {
    name: "Lua",
    year: "1993",
    type: "Embedded Scripting",
    category: "scripting",
    icon: "🌙",
    nick: "Lightweight & Fast",
    difficulty: "Easy",
    strength: "Tiny memory footprint, easily embedded into C/C++ apps",
    weakness: "1-indexed arrays and minimal standard library",
    desc: "The lightweight scripting language inside video games like Roblox, World of Warcraft, and Redis.",
    uses: ["Roblox", "Game Modding", "Redis Scripts", "Neovim"],
    code: `local player = { name = "Hero", score = 100 }\nprint("Welcome, " .. player.name)`,
    url: "https://www.lua.org/"
  },
  {
    name: "Bash",
    year: "1989",
    type: "Shell Automation",
    category: "scripting",
    icon: "$_",
    nick: "Terminal Native",
    difficulty: "Medium",
    strength: "Pre-installed on almost every Linux/Unix server, easy pipe chaining",
    weakness: "Tricky quoting rules and weak data structures",
    desc: "The universal terminal script for automating servers, cloud containers, and CI/CD pipelines.",
    uses: ["DevOps", "CI/CD Workflows", "Linux Scripts", "Docker"],
    code: `#!/usr/bin/env bash\necho "Current user: $(whoami)"`,
    url: "https://www.gnu.org/software/bash/"
  },
  {
    name: "R",
    year: "1993",
    type: "Statistical Analysis",
    category: "data",
    icon: "R",
    nick: "The Statistician",
    difficulty: "Medium",
    strength: "Unmatched statistical modeling and ggplot2 visual graphs",
    weakness: "Memory-heavy on massive datasets",
    desc: "The standard language for statistical computing, clinical trials, and bioinformatics research.",
    uses: ["Bioinformatics", "Academic Research", "Data Charts", "Clinical Studies"],
    code: `scores <- c(88, 92, 79, 95)\nsummary(scores)`,
    url: "https://www.r-project.org/"
  },
  {
    name: "Julia",
    year: "2012",
    type: "Scientific Computing",
    category: "data",
    icon: "JL",
    nick: "Fast Scientific",
    difficulty: "Medium",
    strength: "Combines Python-like syntax with compiled C-like speed",
    weakness: "Warmup latency on initial code compilation",
    desc: "Designed to solve the 'two-language problem' in scientific computing and physical simulation.",
    uses: ["Climate Models", "Differential Equations", "Quantum Computing"],
    code: `function simulate(n)\n    return sum(rand(n))\nend\nprintln(simulate(1000))`,
    url: "https://julialang.org/"
  },
  {
    name: "Solidity",
    year: "2014",
    type: "Smart Contracts",
    category: "backend",
    icon: "Ξ",
    nick: "Ethereum Contracts",
    difficulty: "Hard",
    strength: "Standard for Ethereum & EVM decentralized applications",
    weakness: "Immutable deployments mean bugs cannot be undone",
    desc: "Contract-oriented language used to write financial agreements and tokens on Ethereum.",
    uses: ["Ethereum", "DeFi", "Smart Contracts", "Web3"],
    code: `// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\ncontract Hello {\n    string public message = "Hello Web3";\n}`,
    url: "https://soliditylang.org/"
  },
  {
    name: "GDScript",
    year: "2014",
    type: "Game Scripting",
    category: "game",
    icon: "🎮",
    nick: "Godot Native",
    difficulty: "Easy",
    strength: "Deep integration with Godot engine nodes, instant playtesting",
    weakness: "Tied specifically to the Godot Game Engine",
    desc: "Clean Python-like language made specifically for building 2D and 3D indie games in Godot.",
    uses: ["Godot Engine", "Indie 2D Games", "3D Prototypes"],
    code: `extends Node2D\nfunc _ready():\n    print("Level loaded successfully")`,
    url: "https://godotengine.org/"
  },
  {
    name: "Scala",
    year: "2004",
    type: "Functional & JVM",
    category: "functional",
    icon: "§",
    nick: "High-Scale JVM",
    difficulty: "Hard",
    strength: "Blends functional and OOP, powers Apache Spark data processing",
    weakness: "Complex type system with slower compiler passes",
    desc: "Concise JVM language that drives big-data analytics and distributed streaming clusters.",
    uses: ["Apache Spark", "Big Data", "Fintech Streaming"],
    code: `val items = List("Spark", "Kafka", "Akka")\nitems.map(_.toUpperCase).foreach(println)`,
    url: "https://www.scala-lang.org/"
  },
  {
    name: "Clojure",
    year: "2007",
    type: "Lisp on JVM",
    category: "functional",
    icon: "()",
    nick: "Simple & Concurrent",
    difficulty: "Hard",
    strength: "Immutability by default, interactive REPL coding",
    weakness: "Parentheses syntax takes getting used to",
    desc: "Modern, dynamic Lisp that runs on the JVM and treats code as data.",
    uses: ["Fintech", "Data Pipelines", "REPL Development"],
    code: `(defn square [x] (* x x))\n(println (map square [1 2 3 4]))`,
    url: "https://clojure.org/"
  },
  {
    name: "Assembly",
    year: "1949",
    type: "Low-Level Machine",
    category: "systems",
    icon: "ASM",
    nick: "Bare Metal",
    difficulty: "Expert",
    strength: "Exact direct control over CPU instructions and registers",
    weakness: "Zero abstractions, architecture-dependent (x86 vs ARM)",
    desc: "Human-readable machine instructions used in bootloaders, kernels, and low-level optimization.",
    uses: ["Bootloaders", "Kernel Hooks", "Reverse Engineering"],
    code: `; x86_64 hello\nmov rax, 1      ; write\nmov rdi, 1      ; stdout\nsyscall`,
    url: "https://en.wikipedia.org/wiki/Assembly_language"
  },
  {
    name: "HTML",
    year: "1993",
    type: "Markup Standard",
    category: "frontend",
    icon: "</>",
    nick: "The Web Skeleton",
    difficulty: "Easy",
    strength: "Universally supported, forms the core structure of every website",
    weakness: "Markup language rather than general programming logic",
    desc: "The foundational document language that tells web browsers what to display.",
    uses: ["Web Pages", "Accessibility", "SEO Structure"],
    code: `<!doctype html>\n<h1>Hello from CodeZoo</h1>`,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS",
    year: "1996",
    type: "Styling & Layout",
    category: "frontend",
    icon: "✦",
    nick: "The Web Stylist",
    difficulty: "Easy → Medium",
    strength: "Flexbox, Grid, animations, responsive design",
    weakness: "Cascade specificity rules can be tricky",
    desc: "The stylesheet language that controls layouts, colors, fonts, and responsive screens on the web.",
    uses: ["Web Styling", "Responsive Layouts", "Animations"],
    code: `.card {\n  display: grid;\n  gap: 12px;\n  border-radius: 8px;\n}`,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "Fortran",
    year: "1957",
    type: "Numerical Computing",
    category: "classic",
    icon: "F",
    nick: "The Pioneer",
    difficulty: "Medium",
    strength: "Extremely fast multidimensional array math",
    weakness: "Specialized strictly for scientific calculation",
    desc: "The first major high-level language, still active in supercomputing and weather modeling.",
    uses: ["Weather Sim", "Supercomputers", "Physics Math"],
    code: `program hello\n  print *, 'Running scientific calculations'\nend program hello`,
    url: "https://fortran-lang.org/"
  },
  {
    name: "COBOL",
    year: "1959",
    type: "Business Ledger",
    category: "classic",
    icon: "CBL",
    nick: "The Banking Vault",
    difficulty: "Medium",
    strength: "Zero rounding errors in financial transactions, rock-solid stability",
    weakness: "Verbose syntax and shrinking developer pool",
    desc: "Grace Hopper's business language that still quietly handles trillions of dollars in mainframe banking.",
    uses: ["Mainframes", "Banking", "Insurance Records"],
    code: `       IDENTIFICATION DIVISION.\n       PROGRAM-ID. HELLO.\n       PROCEDURE DIVISION.\n           DISPLAY 'TRANSACTION LOGGED'.\n           STOP RUN.`,
    url: "https://en.wikipedia.org/wiki/COBOL"
  },
  {
    name: "Lisp",
    year: "1958",
    type: "Classic Functional",
    category: "classic",
    icon: "()",
    nick: "Code as Data",
    difficulty: "Hard",
    strength: "Revolutionary macro system, code-as-data (homoiconicity)",
    weakness: "Parenthesis syntax",
    desc: "One of the earliest programming languages, pioneering garbage collection and recursion.",
    uses: ["AI History", "Emacs (Elisp)", "Language Research"],
    code: `(defun greet (name)\n  (format t "Hello, ~A!" name))\n(greet "Coder")`,
    url: "https://common-lisp.net/"
  },
  {
    name: "Perl",
    year: "1987",
    type: "Text & Scripting",
    category: "scripting",
    icon: "PL",
    nick: "The Text Slicer",
    difficulty: "Medium",
    strength: "Unbeatable regular expressions and quick text manipulation",
    weakness: "Can become hard to read when heavily compressed",
    desc: "Larry Wall's scripting language that glued together the early web and sysadmin tools.",
    uses: ["Log Parsing", "System Scripts", "Bioinformatics"],
    code: `my $line = "Status: OK";\nif ($line =~ /Status: (.+)/) {\n    print "Result: $1\\n";\n}`,
    url: "https://www.perl.org/"
  },
  {
    name: "Nim",
    year: "2008",
    type: "Clean & Compiled",
    category: "systems",
    icon: "👑",
    nick: "Pythonic C",
    difficulty: "Medium",
    strength: "Compiles to C with Python-like clean syntax and fast execution",
    weakness: "Smaller community than Go or Rust",
    desc: "Combines high-level readability with native compiled speed and meta-programming.",
    uses: ["Game Tools", "CLI Utilities", "System Programming"],
    code: `let numbers = @[1, 2, 3, 4]\nfor n in numbers:\n  echo n * 2`,
    url: "https://nim-lang.org/"
  },
  {
    name: "Erlang",
    year: "1986",
    type: "Telecom & Actors",
    category: "functional",
    icon: "ERL",
    nick: "Never Goes Down",
    difficulty: "Hard",
    strength: "Exceptional fault tolerance ('let it crash') and actor concurrency",
    weakness: "Unfamiliar Prolog-like syntax",
    desc: "Built at Ericsson for telephone exchanges that cannot stop running, powers WhatsApp backends.",
    uses: ["Telecom", "WhatsApp", "RabbitMQ"],
    code: `-module(hi).\n-export([start/0]).\nstart() -> io:format("Server alive~n").`,
    url: "https://www.erlang.org/"
  },
  {
    name: "OCaml",
    year: "1996",
    type: "Typed Functional",
    category: "functional",
    icon: "🐫",
    nick: "The Type Mind",
    difficulty: "Hard",
    strength: "Powerful type inference, fast native compiler",
    weakness: "Smaller ecosystem",
    desc: "A practical functional language with an expressive type system, heavily used in trading by Jane Street.",
    uses: ["Jane Street Trading", "Compilers", "Formal Proofs"],
    code: `let square x = x * x\nlet () = print_int (square 5)`,
    url: "https://ocaml.org/"
  },
  {
    name: "Verilog",
    year: "1984",
    type: "Hardware Description",
    category: "hardware",
    icon: "⚡",
    nick: "Silicon Circuit",
    difficulty: "Hard",
    strength: "Models physical electronic gates and clock cycles",
    weakness: "Hardware mental model is very different from software loops",
    desc: "A hardware description language used to design microchips, ASICs, and FPGAs.",
    uses: ["FPGA Chips", "ASIC Design", "Processors"],
    code: `module counter(input clk, output reg [3:0] q);\n  always @(posedge clk) q <= q + 1;\nendmodule`,
    url: "https://en.wikipedia.org/wiki/Verilog"
  },
  {
    name: "VHDL",
    year: "1980",
    type: "Hardware Design",
    category: "hardware",
    icon: "🔌",
    nick: "Strict Hardware",
    difficulty: "Hard",
    strength: "Strict typing for reliable aerospace and defense electronics",
    weakness: "Verbose syntax",
    desc: "Hardware description language used in critical electronics where physical bugs cannot happen.",
    uses: ["Aerospace", "Defense Radar", "FPGA"],
    code: `-- Hardware logic port\nentity Gate is\n  port (a, b: in bit; c: out bit);\nend Gate;`,
    url: "https://en.wikipedia.org/wiki/VHDL"
  },
  {
    name: "GLSL",
    year: "2004",
    type: "GPU Shaders",
    category: "game",
    icon: "✨",
    nick: "The GPU Artist",
    difficulty: "Hard",
    strength: "Runs in parallel on thousands of GPU cores",
    weakness: "Heavy linear algebra math and hard to debug",
    desc: "OpenGL Shading Language. Runs directly on the graphics card to calculate lighting and 3D visual effects.",
    uses: ["WebGL", "Three.js", "Game Shaders"],
    code: `void main() {\n    gl_FragColor = vec4(0.2, 0.6, 1.0, 1.0);\n}`,
    url: "https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language"
  },
  {
    name: "Prolog",
    year: "1972",
    type: "Logic Inference",
    category: "functional",
    icon: "🧩",
    nick: "The Detective",
    difficulty: "Hard",
    strength: "Automatic deduction, backtracking, pattern unification",
    weakness: "Not built for normal procedural tasks or mobile apps",
    desc: "You declare facts and relationships, and Prolog deduces logical answers automatically.",
    uses: ["AI History", "Theorem Proving", "Rule Engines"],
    code: `human(socrates).\nmortal(X) :- human(X).\n% Query: ?- mortal(socrates).`,
    url: "https://www.swi-prolog.org/"
  },
  {
    name: "Ada",
    year: "1980",
    type: "Safety-Critical",
    category: "systems",
    icon: "🛡️",
    nick: "High Reliability",
    difficulty: "Hard",
    strength: "Strict compiler checks to eliminate runtime crashes",
    weakness: "Rigid syntax with heavy safety requirements",
    desc: "Engineered for aerospace, avionics (Boeing/Airbus), and high-speed rail control where safety is paramount.",
    uses: ["Avionics", "Railway Signaling", "Satellites"],
    code: `with Ada.Text_IO;\nprocedure Hello is\nbegin\n   Ada.Text_IO.Put_Line ("System Safe");\nend Hello;`,
    url: "https://www.adaic.org/"
  },
  {
    name: "MATLAB",
    year: "1984",
    type: "Engineering Math",
    category: "data",
    icon: "∑",
    nick: "Matrix Lab",
    difficulty: "Medium",
    strength: "Rich mathematical matrix tools and Simulink hardware simulation",
    weakness: "Expensive commercial license",
    desc: "Widely used across engineering, robotics, control theory, and university laboratories.",
    uses: ["Robotics", "Signal Processing", "Automotive"],
    code: `x = 0:0.1:10;\ny = sin(x);\nplot(x, y);`,
    url: "https://www.mathworks.com/products/matlab.html"
  },
  {
    name: "Crystal",
    year: "2014",
    type: "Fast & Expressive",
    category: "backend",
    icon: "🔮",
    nick: "Compiled Ruby",
    difficulty: "Medium",
    strength: "Ruby-like syntax with compiled C-level execution speed",
    weakness: "Small ecosystem compared to mainstream stacks",
    desc: "Brings the elegant syntax of Ruby to a statically typed LLVM-compiled binary.",
    uses: ["Web APIs", "CLI Tools", "Microservices"],
    code: `puts "Fast as C, slick as Ruby"\ncount = [1, 2, 3].size`,
    url: "https://crystal-lang.org/"
  },
  {
    name: "F#",
    year: "2005",
    type: "Functional .NET",
    category: "functional",
    icon: "F#",
    nick: "Clean .NET",
    difficulty: "Medium → Hard",
    strength: "Clean type inference and full compatibility with .NET libraries",
    weakness: "C# dominates majority of .NET jobs",
    desc: "A functional-first language on Microsoft's .NET that makes incorrect states hard to represent.",
    uses: ["Finance", "Domain Modeling", "Data Analysis"],
    code: `let square x = x * x\n[1..5] |> List.map square |> printfn "%A"`,
    url: "https://fsharp.org/"
  },
  {
    name: "Haxe",
    year: "2005",
    type: "Multi-Target",
    category: "game",
    icon: "HX",
    nick: "Cross Transpiler",
    difficulty: "Medium",
    strength: "Compiles single code to C++, JavaScript, Java, and C#",
    weakness: "Niche community",
    desc: "Transpiler language popular with indie game studios, famously used to build Dead Cells.",
    uses: ["Indie Games", "Dead Cells", "Multi-platform"],
    code: `class Main {\n  static function main() trace("Runs on any platform");\n}`,
    url: "https://haxe.org/"
  },
  {
    name: "Delphi",
    year: "1995",
    type: "Rapid Desktop",
    category: "backend",
    icon: "DLP",
    nick: "Fast Native UI",
    difficulty: "Medium",
    strength: "Fast compilation to standalone native executable files",
    weakness: "Commercial proprietary license",
    desc: "Object Pascal environment renowned for instant compilation of native Windows apps.",
    uses: ["POS Cash Registers", "Factory Tools", "Desktop Software"],
    code: `procedure TForm1.Click(Sender: TObject);\nbegin\n  ShowMessage('Instant native speed');\nend;`,
    url: "https://www.embarcadero.com/products/delphi"
  },
  {
    name: "Objective-C",
    year: "1984",
    type: "Apple Classic",
    category: "classic",
    icon: "OBJ",
    nick: "The iPhone Pioneer",
    difficulty: "Medium → Hard",
    strength: "Dynamic Smalltalk message passing, built the early App Store",
    weakness: "Largely replaced by Swift",
    desc: "The language behind NeXTSTEP, macOS, and the original generation of iPhone applications.",
    uses: ["Legacy iOS", "macOS Core", "Cocoa"],
    code: `NSString *msg = @"Launched the mobile app boom";\nNSLog(@"%@", msg);`,
    url: "https://developer.apple.com/documentation/objectivec"
  },
  {
    name: "Visual Basic",
    year: "1991",
    type: "Rapid UI",
    category: "classic",
    icon: "VB",
    nick: "The Friendly UI",
    difficulty: "Easy",
    strength: "Drag-and-drop form building and approachable English keywords",
    weakness: "Older architectural model",
    desc: "Made visual programming accessible to millions of hobbyists and office workers in the 1990s.",
    uses: ["Excel Macros (VBA)", "Internal Tools", "Legacy Windows"],
    code: `Sub Calculate()\n    MsgBox "Macro executed successfully"\nEnd Sub`,
    url: "https://learn.microsoft.com/dotnet/visual-basic/"
  },
  {
    name: "Pascal",
    year: "1970",
    type: "Structured Classic",
    category: "classic",
    icon: "PAS",
    nick: "The Teacher",
    difficulty: "Easy → Medium",
    strength: "Designed cleanly to teach structured programming",
    weakness: "Rarely chosen for brand new production apps today",
    desc: "Niklaus Wirth's language that educated a whole generation of computer science students.",
    uses: ["Education", "Delphi Roots", "Compiler History"],
    code: `program Hello;\nbegin\n  writeln('Structured and clear');\nend.`,
    url: "https://en.wikipedia.org/wiki/Pascal_(programming_language)"
  },
  {
    name: "BASIC",
    year: "1964",
    type: "First Primer",
    category: "classic",
    icon: "BSC",
    nick: "The Beginner's Start",
    difficulty: "Easy",
    strength: "Introduced kids and hobbyists to programming during the microcomputer revolution",
    weakness: "Early versions relied heavily on line numbers and GOTO",
    desc: "The friendly doorway to coding that launched the home computing boom on Apple II and Commodore 64.",
    uses: ["Computer History", "Apple II Era", "Retro Tech"],
    code: `10 PRINT "HELLO WORLD"\n20 GOTO 10`,
    url: "https://en.wikipedia.org/wiki/BASIC"
  },
  {
    name: "Scheme",
    year: "1975",
    type: "Minimal Lisp",
    category: "functional",
    icon: "λ",
    nick: "The Minimalist Lisp",
    difficulty: "Hard",
    strength: "Extremely compact rules, immortalized in MIT's SICP course",
    weakness: "Mainly used in academics rather than commercial jobs",
    desc: "A clean Lisp dialect famous for teaching computer science fundamentals at MIT.",
    uses: ["SICP Course", "Language Research", "Education"],
    code: `(define (square x) (* x x))\n(display (square 4))`,
    url: "https://schemers.org/"
  },
  {
    name: "Groovy",
    year: "2003",
    type: "Dynamic JVM",
    category: "scripting",
    icon: "GRV",
    nick: "JVM Scripting",
    difficulty: "Easy → Medium",
    strength: "Dynamic scripting that runs natively alongside Java",
    weakness: "Gradually being replaced by Kotlin in build tools",
    desc: "Gave Java developers Python-like dynamic scripting and drove Gradle build automation.",
    uses: ["Gradle Builds", "Jenkins Pipelines", "JVM Scripts"],
    code: `def list = ["Java", "Groovy", "Kotlin"]\nprintln list.join(" -> ")`,
    url: "https://groovy-lang.org/"
  },
  {
    name: "HLSL",
    year: "2002",
    type: "DirectX Shaders",
    category: "game",
    icon: "DX",
    nick: "DirectX Shader",
    difficulty: "Hard",
    strength: "High-speed graphics rendering in DirectX and Unreal Engine",
    weakness: "Complex graphics pipeline prerequisites",
    desc: "Microsoft's High-Level Shader Language used by Xbox and Windows games for real-time lighting.",
    uses: ["DirectX", "Unreal Engine", "Xbox Games"],
    code: `float4 main(float4 pos : POSITION) : SV_TARGET {\n    return float4(1.0, 0.5, 0.2, 1.0);\n}`,
    url: "https://learn.microsoft.com/windows/win32/direct3dhlsl/dx-graphics-hlsl"
  },
  {
    name: "ABAP",
    year: "1983",
    type: "Enterprise ERP",
    category: "backend",
    icon: "SAP",
    nick: "SAP Core",
    difficulty: "Medium → Hard",
    strength: "Deep integration with global SAP supply chain processes",
    weakness: "Proprietary locked-in SAP ecosystem",
    desc: "Powers business transactions and supply chain software inside multinational companies.",
    uses: ["SAP Systems", "Supply Chain", "Corporate Finance"],
    code: `WRITE: / 'Enterprise transaction processed.'.`,
    url: "https://www.sap.com/products/technology-platform/abap.html"
  },
  {
    name: "D",
    year: "2001",
    type: "Modern Native",
    category: "systems",
    icon: "D",
    nick: "Pragmatic C++",
    difficulty: "Hard",
    strength: "Fast compilation, powerful metaprogramming, C-like speed",
    weakness: "Smaller market share compared to C++ and Rust",
    desc: "Designed to fix common pain points of C++ with cleaner modules and faster compilation.",
    uses: ["Games", "High-Performance Tools", "Systems"],
    code: `import std.stdio;\nvoid main() {\n    writeln("Systems code with modern modules");\n}`,
    url: "https://dlang.org/"
  }
];

// App State
let activePage = "explore";
let activeCategory = "all";
let compareList = [];
let currentlyViewedLang = null;

// DOM
const gridEl = document.getElementById("languageGrid");
const searchEl = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const resultCountEl = document.getElementById("resultCount");
const emptyStateEl = document.getElementById("emptyState");
const resetBtn = document.getElementById("resetBtn");
const compareCountBubble = document.getElementById("compareCountBubble");
const compareSelect = document.getElementById("compareSelect");
const compareContent = document.getElementById("compareContent");
const clearComparePageBtn = document.getElementById("clearComparePageBtn");
const quizBox = document.getElementById("quizBox");
const toastEl = document.getElementById("toast");

// Modal DOM
const modal = document.getElementById("modal");
const modalIcon = document.getElementById("modalIcon");
const modalType = document.getElementById("modalType");
const modalYear = document.getElementById("modalYear");
const modalDiff = document.getElementById("modalDiff");
const modalTitle = document.getElementById("modalTitle");
const modalNick = document.getElementById("modalNick");
const modalDesc = document.getElementById("modalDesc");
const modalStrength = document.getElementById("modalStrength");
const modalWeakness = document.getElementById("modalWeakness");
const modalUses = document.getElementById("modalUses");
const modalCode = document.getElementById("modalCode");
const modalUrl = document.getElementById("modalUrl");
const modalCompareBtn = document.getElementById("modalCompareBtn");
const copyCodeBtn = document.getElementById("copyCodeBtn");

// -------------------------------------------------------------
// Initialization
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupFilterAndSearch();
  setupCompareSelect();
  renderCards();
  initQuiz();
  setupModalEvents();
});

// Tab Page Switching
function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetPage = btn.dataset.page;
      switchPage(targetPage);
    });
  });
}

function switchPage(pageId) {
  activePage = pageId;

  // Toggle active tab header buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === pageId);
  });

  // Toggle active page section
  document.querySelectorAll(".page-view").forEach(view => {
    view.classList.toggle("active", view.id === `page-${pageId}`);
  });

  if (pageId === "compare") {
    renderCompareTable();
  }
}

// Filtering and Searching
function setupFilterAndSearch() {
  // Category pills
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.dataset.cat;
      renderCards();
    });
  });

  // Search input
  searchEl.addEventListener("input", () => {
    clearSearchBtn.hidden = !searchEl.value;
    renderCards();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchEl.value = "";
    clearSearchBtn.hidden = true;
    searchEl.focus();
    renderCards();
  });

  resetBtn.addEventListener("click", () => {
    searchEl.value = "";
    clearSearchBtn.hidden = true;
    activeCategory = "all";
    document.querySelectorAll(".cat-pill").forEach(p => p.classList.toggle("active", p.dataset.cat === "all"));
    renderCards();
  });

  // Surprise / Random button
  document.getElementById("randomBtn").addEventListener("click", () => {
    const list = getFilteredLanguages();
    const pool = list.length > 0 ? list : languages;
    const picked = pool[Math.floor(Math.random() * pool.length)];
    openModal(picked);
  });
}

function getFilteredLanguages() {
  const q = searchEl.value.trim().toLowerCase();
  return languages.filter(item => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    if (!matchesCat) return false;
    if (!q) return true;

    return (
      item.name.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q) ||
      item.nick.toLowerCase().includes(q) ||
      item.uses.some(u => u.toLowerCase().includes(q))
    );
  });
}

// Avatar Color Palette matching the reference image
function getAvatarBg(i) {
  const colors = [
    "#ffe36b", // Warm yellow (like HTML card in photo)
    "#7ad8eb", // Vibrant Cyan (like CSS card in photo)
    "#ff977d", // Peach/Coral (like JS card in photo)
    "#ad93eb", // Lilac/Purple (like TS card in photo)
    "#9be382", // Lime green
    "#ffba7a", // Orange
    "#8ec5fc", // Sky blue
    "#fca5a5"  // Soft red
  ];
  return colors[i % colors.length];
}

// Render Language Grid with Pop-out 3D Cards matching reference photo
function renderCards() {
  const list = getFilteredLanguages();
  resultCountEl.textContent = `${list.length} language${list.length !== 1 ? 's' : ''}`;
  emptyStateEl.hidden = list.length > 0;

  gridEl.innerHTML = list.map((item, idx) => {
    const isCompared = compareList.some(c => c.name === item.name);
    const avatarBg = getAvatarBg(idx);

    return `
      <article class="zoo-card ${isCompared ? 'selected' : ''}" data-name="${item.name}" tabindex="0">
        <div class="card-head">
          <span class="card-badge">${item.type.split('/')[0].trim()}</span>
          <span class="card-year">${item.year}</span>
        </div>

        <div class="card-avatar" style="background-color: ${avatarBg};">
          ${item.icon}
        </div>

        <div class="card-title">${item.name}</div>
        <div class="card-nick">${item.nick}</div>
        <p class="card-desc">${item.desc}</p>

        <div class="card-bullets">
          <div class="card-bullet-row">
            <span class="bullet-ico">💪</span>
            <span class="bullet-text"><strong class="bullet-strong">POWER:</strong> ${item.strength}</span>
          </div>
          <div class="card-bullet-row">
            <span class="bullet-ico">⚠️</span>
            <span class="bullet-text"><strong class="bullet-strong">WEAKNESS:</strong> ${item.weakness}</span>
          </div>
        </div>

        <div class="card-tags">
          ${item.uses.slice(0, 3).map(u => `<span class="tag-pill">${u}</span>`).join("")}
        </div>
      </article>
    `;
  }).join("");

  gridEl.querySelectorAll(".zoo-card").forEach(card => {
    card.addEventListener("click", () => {
      const name = card.dataset.name;
      const item = languages.find(l => l.name === name);
      if (item) openModal(item);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const name = card.dataset.name;
        const item = languages.find(l => l.name === name);
        if (item) openModal(item);
      }
    });
  });
}

// Modal Logic
function openModal(item) {
  currentlyViewedLang = item;
  const idx = languages.indexOf(item);

  modalIcon.textContent = item.icon;
  modalIcon.style.backgroundColor = getAvatarBg(idx);
  modalType.textContent = item.type;
  modalYear.textContent = item.year;
  modalDiff.textContent = item.difficulty;
  modalTitle.textContent = item.name;
  modalNick.textContent = item.nick;
  modalDesc.textContent = item.desc;
  modalStrength.textContent = item.strength;
  modalWeakness.textContent = item.weakness;

  modalUses.innerHTML = item.uses.map(u => `<span>${u}</span>`).join("");
  modalCode.textContent = item.code;
  modalUrl.href = item.url;

  updateModalCompareBtn();

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  currentlyViewedLang = null;
}

function updateModalCompareBtn() {
  if (!currentlyViewedLang) return;
  const isCompared = compareList.some(c => c.name === currentlyViewedLang.name);
  modalCompareBtn.textContent = isCompared ? "✓ Compared" : "+ Compare";
}

function setupModalEvents() {
  document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  copyCodeBtn.addEventListener("click", () => {
    if (!currentlyViewedLang) return;
    navigator.clipboard.writeText(currentlyViewedLang.code)
      .then(() => {
        copyCodeBtn.textContent = "Copied!";
        showToast("Code copied to clipboard");
        setTimeout(() => copyCodeBtn.textContent = "Copy", 1500);
      });
  });

  modalCompareBtn.addEventListener("click", () => {
    if (!currentlyViewedLang) return;
    toggleCompare(currentlyViewedLang);
    updateModalCompareBtn();
  });
}

// Comparison System
function setupCompareSelect() {
  compareSelect.innerHTML = `<option value="">Choose a language to compare...</option>` +
    languages.map(l => `<option value="${l.name}">${l.name} (${l.type})</option>`).join("");

  compareSelect.addEventListener("change", (e) => {
    const val = e.target.value;
    if (!val) return;
    const target = languages.find(l => l.name === val);
    if (target) toggleCompare(target);
    compareSelect.value = "";
  });

  clearComparePageBtn.addEventListener("click", () => {
    compareList = [];
    updateCompareCounters();
    renderCompareTable();
    renderCards();
    showToast("Cleared comparison list");
  });
}

function toggleCompare(item) {
  const index = compareList.findIndex(c => c.name === item.name);
  if (index >= 0) {
    compareList.splice(index, 1);
    showToast(`Removed ${item.name}`);
  } else {
    if (compareList.length >= 3) {
      showToast("Maximum 3 languages can be compared");
      return;
    }
    compareList.push(item);
    showToast(`Added ${item.name} to comparison`);
  }

  updateCompareCounters();
  renderCards();
  if (activePage === "compare") {
    renderCompareTable();
  }
}

function updateCompareCounters() {
  const count = compareList.length;
  compareCountBubble.textContent = count;
  compareCountBubble.hidden = count === 0;
}

function renderCompareTable() {
  if (compareList.length === 0) {
    compareContent.innerHTML = `
      <div class="empty-state">
        <p>No languages selected yet.</p>
        <p class="sub">Add one using the dropdown above or click "+ Compare" inside any language profile.</p>
      </div>
    `;
    return;
  }

  const rows = [
    { label: "Language", fn: l => `<strong>${l.icon} ${l.name}</strong>` },
    { label: "Category", fn: l => l.type },
    { label: "First Appeared", fn: l => l.year },
    { label: "Difficulty", fn: l => l.difficulty },
    { label: "Core Strength", fn: l => `<span style="color:#059669">${l.strength}</span>` },
    { label: "Main Tradeoff", fn: l => `<span style="color:#e11d48">${l.weakness}</span>` },
    { label: "Common Uses", fn: l => l.uses.join(", ") },
    { label: "Action", fn: l => `<button class="btn-sm" onclick="removeCompareItem('${l.name}')">Remove</button>` }
  ];

  let html = `<table class="compare-table"><thead><tr><th>Feature</th>`;
  compareList.forEach(l => {
    html += `<th>${l.name}</th>`;
  });
  html += `</tr></thead><tbody>`;

  rows.forEach(r => {
    html += `<tr><td>${r.label}</td>`;
    compareList.forEach(l => {
      html += `<td>${r.fn(l)}</td>`;
    });
    html += `</tr>`;
  });

  html += `</tbody></table>`;
  compareContent.innerHTML = html;
}

window.removeCompareItem = function(name) {
  const item = languages.find(l => l.name === name);
  if (item) toggleCompare(item);
};

// =============================================================
// Deep Stack Matcher System (Multi-step Diagnostic Assessment)
// =============================================================
const matcherQuestions = [
  {
    step: 1,
    title: "Primary Target & Domain",
    subtitle: "What is the core environment where your software will live?",
    options: [
      { text: "Modern Interactive Web & SaaS Applications", tag: "web", scores: { "TypeScript": 4, "JavaScript": 3, "Python": 1, "PHP": 2, "Go": 1 } },
      { text: "Scalable Cloud Microservices, APIs & Distributed Networks", tag: "cloud", scores: { "Go": 4, "Rust": 3, "Java": 3, "C#": 3, "Elixir": 3 } },
      { text: "Machine Learning, Artificial Intelligence & Data Pipelines", tag: "ai", scores: { "Python": 5, "Julia": 3, "R": 2, "C++": 1 } },
      { text: "High-Performance Systems, Game Engines & OS Kernels", tag: "systems", scores: { "Rust": 4, "C++": 4, "C": 3, "Zig": 3 } },
      { text: "Mobile Applications (iOS, Android, Cross-Platform)", tag: "mobile", scores: { "Dart": 4, "Kotlin": 4, "Swift": 4, "TypeScript": 1 } },
      { text: "Indie Video Game Development & Creative Visuals", tag: "game", scores: { "C#": 4, "GDScript": 4, "C++": 3, "Lua": 2 } }
    ]
  },
  {
    step: 2,
    title: "Execution Speed vs. Shipping Velocity",
    subtitle: "How does your team evaluate runtime latency against development speed?",
    options: [
      { text: "Rapid Shipping First — Need to validate and launch in days", scores: { "Python": 3, "TypeScript": 3, "Ruby": 3, "PHP": 2 } },
      { text: "Balanced Production Sweet Spot — Fast builds and fast execution", scores: { "Go": 4, "Kotlin": 3, "C#": 3, "Dart": 2 } },
      { text: "Maximum Throughput & Zero-Cost — Microsecond latencies matter", scores: { "Rust": 4, "C++": 4, "C": 3, "Zig": 3 } },
      { text: "Extreme Reliability & Uptime — System cannot crash under load", scores: { "Elixir": 4, "Rust": 4, "Java": 3, "Haskell": 3 } }
    ]
  },
  {
    step: 3,
    title: "Type System & Safety Philosophy",
    subtitle: "How strictly should the compiler enforce correctness before deployment?",
    options: [
      { text: "Strict Compile-Time Safety — Catch memory and type bugs upfront", scores: { "Rust": 4, "TypeScript": 3, "Kotlin": 3, "F#": 3 } },
      { text: "Pragmatic & Accessible — Lightweight types that don't slow me down", scores: { "Go": 4, "C#": 3, "Dart": 3, "Java": 2 } },
      { text: "Flexible Dynamic Typing — Freedom to iterate quickly without compiler friction", scores: { "Python": 4, "JavaScript": 3, "Ruby": 3, "Lua": 2 } },
      { text: "Pure Functional Immutability — Mathematical predictability and pure functions", scores: { "Haskell": 5, "Elixir": 4, "Scala": 3, "Clojure": 4 } }
    ]
  },
  {
    step: 4,
    title: "Ecosystem & Deployment Preferences",
    subtitle: "What is your deployment target and third-party library dependency need?",
    options: [
      { text: "Massive Open-Source Ecosystem — Need ready-to-use packages for everything", scores: { "Python": 4, "TypeScript": 4, "JavaScript": 3 } },
      { text: "Clean Standalone Binary — Zero-dependency single executable deployment", scores: { "Go": 5, "Rust": 4, "Zig": 3 } },
      { text: "Enterprise Backwards Compatibility & Long-Term Support", scores: { "Java": 4, "C#": 4, "Kotlin": 2 } },
      { text: "Native Hardware or Embedded Devices with Low Memory Footprint", scores: { "C": 5, "Rust": 3, "Zig": 3, "Assembly": 2 } }
    ]
  }
];

let matcherCurrentStep = 0;
let matcherAccumulatedScores = {};

function initQuiz() {
  matcherCurrentStep = 0;
  matcherAccumulatedScores = {};
  renderMatcherStep();
}

function renderMatcherStep() {
  if (matcherCurrentStep >= matcherQuestions.length) {
    calculateAndShowRecommendation();
    return;
  }

  const q = matcherQuestions[matcherCurrentStep];
  const progressPercent = Math.round(((matcherCurrentStep + 1) / matcherQuestions.length) * 100);

  quizBox.innerHTML = `
    <div class="matcher-header">
      <div class="matcher-step-badge">Question ${q.step} of ${matcherQuestions.length}</div>
      <div class="matcher-progress-track">
        <div class="matcher-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>
    </div>

    <div class="quiz-q">${q.title}</div>
    <div class="matcher-sub">${q.subtitle}</div>

    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <button class="quiz-opt" data-opt="${i}">
          <span class="matcher-opt-num">${i + 1}</span>
          <span class="matcher-opt-text">${opt.text}</span>
        </button>
      `).join("")}
    </div>
  `;

  quizBox.querySelectorAll(".quiz-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const optIdx = parseInt(btn.dataset.opt, 10);
      const chosen = q.options[optIdx];

      // Tally up scores
      for (const [langName, pts] of Object.entries(chosen.scores)) {
        matcherAccumulatedScores[langName] = (matcherAccumulatedScores[langName] || 0) + pts;
      }

      matcherCurrentStep++;
      renderMatcherStep();
    });
  });
}

function calculateAndShowRecommendation() {
  // Sort accumulated scores descending
  const sorted = Object.entries(matcherAccumulatedScores).sort((a, b) => b[1] - a[1]);
  const winnerName = sorted.length > 0 ? sorted[0][0] : "TypeScript";
  const runnerUpName = sorted.length > 1 ? sorted[1][0] : "Go";

  const winner = languages.find(l => l.name === winnerName) || languages[0];
  const runnerUp = languages.find(l => l.name === runnerUpName);

  quizBox.innerHTML = `
    <div class="quiz-result">
      <div class="matcher-result-tag">Diagnosed Recommendation</div>
      <div class="matcher-winner-card">
        <div class="matcher-winner-avatar" style="background-color: ${getAvatarBg(languages.indexOf(winner))};">
          ${winner.icon}
        </div>
        <div class="matcher-winner-info">
          <h3>${winner.name}</h3>
          <div class="matcher-winner-nick">${winner.nick}</div>
          <div class="matcher-winner-tags">
            <span class="pill-mini">${winner.type}</span>
            <span class="pill-mini">Estd. ${winner.year}</span>
            <span class="pill-mini">${winner.difficulty}</span>
          </div>
        </div>
      </div>

      <p class="matcher-result-explanation">
        Based on your requirements across <strong>${matcherQuestions.length} architectural parameters</strong>, 
        <strong>${winner.name}</strong> aligns closest with your speed, safety guarantees, and ecosystem constraints.
      </p>

      <div class="matcher-tradeoff-box">
        <div><strong>Key Advantage:</strong> ${winner.strength}</div>
        <div style="margin-top: 4px;"><strong>Watch Out For:</strong> ${winner.weakness}</div>
      </div>

      ${runnerUp ? `
        <div class="matcher-runnerup-row">
          <span>Alternative Consideration:</span>
          <button class="btn-sm" id="matcherRunnerUpBtn">${runnerUp.icon} ${runnerUp.name}</button>
        </div>
      ` : ''}

      <div style="display:flex; gap:10px; justify-content:center; margin-top: 20px; flex-wrap: wrap;">
        <button class="btn-primary" id="quizInspectBtn">Inspect ${winner.name} Profile</button>
        <button class="btn-secondary" id="quizResetBtn">Retake Diagnostic</button>
      </div>
    </div>
  `;

  document.getElementById("quizInspectBtn").addEventListener("click", () => openModal(winner));
  document.getElementById("quizResetBtn").addEventListener("click", initQuiz);

  const runnerUpBtn = document.getElementById("matcherRunnerUpBtn");
  if (runnerUpBtn && runnerUp) {
    runnerUpBtn.addEventListener("click", () => openModal(runnerUp));
  }
}

// Toast
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 2000);
}
