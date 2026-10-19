/**
 * CodeZoo — Modern Interactive Field Guide to 70 Computing Languages
 * Curated by Radhey Bhadja
 */

const languages = [
  {
    name: "Python",
    year: "1991",
    type: "AI & Scripting",
    category: "data",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    nick: "Friendly & Rapid",
    difficulty: "Easy",
    strength: "Huge ML & AI ecosystem, instant prototyping",
    weakness: "Slower execution speed & GIL",
    desc: "Readable, indentation-based syntax that feels like pseudocode. The world's go-to standard for AI, machine learning, and automation.",
    uses: ["Machine Learning", "PyTorch", "FastAPI", "Automation"],
    code: "def greet(name: str) -> str:\n    return f\"Hello, {name}!\"\n\nprint(greet(\"World\"))",
    url: "https://www.python.org/"
  },
  {
    name: "Rust",
    year: "2015",
    type: "Systems & Native",
    category: "systems",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
    nick: "Fearless Concurrency",
    difficulty: "Hard",
    strength: "Compile-time memory safety without garbage collection",
    weakness: "Steep learning curve and strict borrow checker",
    desc: "Blazing fast systems language that prevents memory corruption and race conditions before code ever runs.",
    uses: ["OS Kernels", "WebAssembly", "Cloud Infrastructure", "Fintech"],
    code: "fn main() {\n    let msg = \"Fast & safe\";\n    println!(\"{msg}\");\n}",
    url: "https://www.rust-lang.org/"
  },
  {
    name: "TypeScript",
    year: "2012",
    type: "Web & Fullstack",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    nick: "Typed JavaScript",
    difficulty: "Medium",
    strength: "Catches bugs early with static types & supreme tooling",
    weakness: "Requires build and transpilation pipeline",
    desc: "JavaScript enriched with static typing. The industry default for scalable web apps, Next.js, and Node.js microservices.",
    uses: ["React", "Next.js", "Node.js", "Web APIs"],
    code: "interface User {\n  id: number;\n  name: string;\n}\n\nconst u: User = { id: 1, name: \"Radhey\" };",
    url: "https://www.typescriptlang.org/"
  },
  {
    name: "JavaScript",
    year: "1995",
    type: "Web Standard",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    nick: "The Browser Engine",
    difficulty: "Easy -> Medium",
    strength: "Runs in every browser natively, largest package ecosystem (npm)",
    weakness: "Dynamic quirks and implicit type coercions",
    desc: "The ubiquitous language of the web that drives interactive browser experiences, server runtimes, and mobile cross-compilers.",
    uses: ["Websites", "Node.js", "Interactive UI", "Electron"],
    code: "const fetchJson = async (url) => {\n  const res = await fetch(url);\n  return res.json();\n};",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "Go",
    year: "2009",
    type: "Cloud & Backend",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    nick: "Simple & Concurrent",
    difficulty: "Medium",
    strength: "Lightweight goroutines, lightning fast compilation, robust standard library",
    weakness: "Repetitive verbose error handling boilerplate",
    desc: "Engineered at Google for cloud microservices, Docker, Kubernetes, and massive distributed network architectures.",
    uses: ["Kubernetes", "Docker", "Microservices", "Cloud Infrastructure"],
    code: "package main\nimport \"fmt\"\n\nfunc main() {\n    go fmt.Println(\"Running in goroutine\")\n}",
    url: "https://go.dev/"
  },
  {
    name: "C++",
    year: "1985",
    type: "Systems & Games",
    category: "systems",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    nick: "Maximum Performance",
    difficulty: "Hard",
    strength: "Direct hardware control, deterministic memory, zero-cost abstractions",
    weakness: "Vast language complexity and risk of undefined behavior",
    desc: "The high-octane powerhouse behind 3D game engines (Unreal Engine), high-frequency trading, and operating system kernels.",
    uses: ["Game Engines", "Graphics", "Finance", "OS Kernels"],
    code: "#include <iostream>\nint main() {\n    std::cout << \"Fast execution\\n\";\n    return 0;\n}",
    url: "https://isocpp.org/"
  },
  {
    name: "C",
    year: "1972",
    type: "Low-Level & OS",
    category: "systems",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    nick: "The Foundation",
    difficulty: "Medium -> Hard",
    strength: "Bare-metal efficiency, minimal runtime overhead, universal portability",
    weakness: "Manual memory management (malloc/free) with no safety nets",
    desc: "Dennis Ritchie's classic masterpiece that powers the Linux kernel, Git, SQLite, and embedded microcontrollers worldwide.",
    uses: ["Linux Kernel", "Embedded Systems", "Firmware", "Interpreters"],
    code: "#include <stdio.h>\nint main() {\n    printf(\"Bare metal control\\n\");\n    return 0;\n}",
    url: "https://en.cppreference.com/w/c"
  },
  {
    name: "C#",
    year: "2000",
    type: "Enterprise & Games",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    nick: "Modern & Polished",
    difficulty: "Medium",
    strength: "World-class .NET tooling, elegant LINQ queries, and Unity engine hegemony",
    weakness: "Large enterprise framework surface to master",
    desc: "Microsoft's flagship modern language powering enterprise cloud backends (ASP.NET Core), desktop apps, and Unity games.",
    uses: ["Unity Engine", "ASP.NET Core", "Enterprise", "Desktop"],
    code: "record User(string Name, int Id);\nvar user = new User(\"Radhey\", 101);\nConsole.WriteLine(user.Name);",
    url: "https://learn.microsoft.com/dotnet/csharp/"
  },
  {
    name: "Java",
    year: "1995",
    type: "Enterprise & Cloud",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    nick: "The Enterprise Workhorse",
    difficulty: "Medium",
    strength: "Battle-tested stability, world-class JIT optimization, vast enterprise libraries",
    weakness: "More verbose structure compared to modern alternatives",
    desc: "The architectural backbone for global banking systems, enterprise SaaS, and big-data streaming networks (Kafka, Hadoop).",
    uses: ["Spring Boot", "Banking", "Apache Kafka", "Big Data"],
    code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"JVM Ready\");\n    }\n}",
    url: "https://www.java.com/"
  },
  {
    name: "Kotlin",
    year: "2011",
    type: "Mobile & JVM",
    category: "mobile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    nick: "Modern Android",
    difficulty: "Medium",
    strength: "Concise expressive syntax, built-in null safety, 100% Java interop",
    weakness: "Gradle build configurations can get complex",
    desc: "Google's official preferred language for Android development, modern server backends, and multiplatform code sharing.",
    uses: ["Android Apps", "Jetpack Compose", "Server Backends", "Multiplatform"],
    code: "data class Item(val title: String, val price: Double)\nval cart = listOf(Item(\"Coffee\", 3.5))\nprintln(cart.first())",
    url: "https://kotlinlang.org/"
  },
  {
    name: "Swift",
    year: "2014",
    type: "Apple Platforms",
    category: "mobile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    nick: "Fast & Clean",
    difficulty: "Medium",
    strength: "Clean expressive syntax, native ARC speed, declarative SwiftUI",
    weakness: "Primarily focused within Apple ecosystem ecosystems",
    desc: "Apple's modern programming language designed for crafting polished native applications across iOS, iPadOS, macOS, and watchOS.",
    uses: ["iOS Apps", "SwiftUI", "macOS Software", "watchOS"],
    code: "struct Card {\n    let title: String\n}\nlet c = Card(title: \"CodeZoo\")\nprint(c.title)",
    url: "https://www.swift.org/"
  },
  {
    name: "Dart",
    year: "2011",
    type: "Cross-Platform",
    category: "mobile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    nick: "Flutter's Engine",
    difficulty: "Easy -> Medium",
    strength: "Stateful hot reload, smooth 60/120fps UI rendering with Flutter",
    weakness: "Infrequently chosen outside the Flutter UI framework",
    desc: "Google's client-optimized language engineered for multi-platform UI applications compiling to ARM, x64, and WebAssembly.",
    uses: ["Flutter", "Cross-platform Mobile", "Desktop UI", "Web"],
    code: "void main() {\n  final platforms = ['iOS', 'Android', 'Web'];\n  print(platforms.join(', '));\n}",
    url: "https://dart.dev/"
  },
  {
    name: "PHP",
    year: "1995",
    type: "Web Backend",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    nick: "The Web Backbone",
    difficulty: "Easy -> Medium",
    strength: "Zero-friction hosting deployment, world-class modern Laravel ecosystem",
    weakness: "Historical legacy inconsistencies in standard library",
    desc: "Powers nearly 75% of server-rendered web applications including WordPress, Wikipedia, and modern high-speed Laravel platforms.",
    uses: ["Laravel", "WordPress", "Web APIs", "E-commerce"],
    code: "<?php\n$routes = ['/', '/explore', '/about'];\necho \"Active routes: \" . count($routes);",
    url: "https://www.php.net/"
  },
  {
    name: "Ruby",
    year: "1995",
    type: "Web & Scripting",
    category: "scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    nick: "Developer Happiness",
    difficulty: "Easy",
    strength: "Human-centric poetic syntax, unmatched startup velocity with Rails",
    weakness: "Lower raw execution throughput than compiled languages",
    desc: "Focused on developer joy and intuitive expression. Famous for bootstrapping startups like GitHub, Shopify, and Airbnb with Rails.",
    uses: ["Ruby on Rails", "Web Startups", "DevOps Automation", "CLI Tools"],
    code: "5.times { |i| puts \"Step #{i + 1}\" }\nuser = { name: \"Radhey\", role: \"Dev\" }",
    url: "https://www.ruby-lang.org/"
  },
  {
    name: "SQL",
    year: "1974",
    type: "Relational Query",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    nick: "The Data Standard",
    difficulty: "Easy -> Medium",
    strength: "Declarative querying standard, battle-tested ACID data integrity",
    weakness: "Dialect nuances across PostgreSQL, MySQL, and Oracle",
    desc: "The universal declarative language for retrieving, structuring, and filtering relational information across every software domain.",
    uses: ["PostgreSQL", "MySQL", "Data Analytics", "Backend Storage"],
    code: "SELECT name, year FROM languages\nWHERE category = 'systems'\nORDER BY year ASC;",
    url: "https://en.wikipedia.org/wiki/SQL"
  },
  {
    name: "Haskell",
    year: "1990",
    type: "Pure Functional",
    category: "functional",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg",
    nick: "Pure & Immutable",
    difficulty: "Hard",
    strength: "Strict mathematical correctness, lazy evaluation, zero side-effects",
    weakness: "Monadic I/O architecture represents a steep conceptual hurdle",
    desc: "A purely functional language with deep mathematical roots where functions are provably predictable and completely free of side effects.",
    uses: ["Compilers", "Fintech Trading", "Academic Research", "Cryptography"],
    code: "fibs = 0 : 1 : zipWith (+) fibs (tail fibs)\nmain = print (take 8 fibs)",
    url: "https://www.haskell.org/"
  },
  {
    name: "Elixir",
    year: "2012",
    type: "Real-time & Concurrency",
    category: "functional",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
    nick: "Fault-Tolerant Actor",
    difficulty: "Medium",
    strength: "Millions of concurrent processes, rock-solid BEAM VM uptime",
    weakness: "Dynamic typing requires disciplined testing",
    desc: "Built on the battle-tested Erlang BEAM runtime. Exceptional for live streaming, collaborative apps, and resilient microservices.",
    uses: ["Phoenix LiveView", "Discord Chat", "IoT Backends", "Telephony"],
    code: "defmodule Zoo do\n  def hello(name), do: \"Welcome, #{name}!\"\nend",
    url: "https://elixir-lang.org/"
  },
  {
    name: "Zig",
    year: "2016",
    type: "Modern Systems",
    category: "systems",
    icon: "https://cdn.simpleicons.org/zig",
    nick: "No Hidden Control Flow",
    difficulty: "Hard",
    strength: "Zero hidden allocations, compiles C/C++ seamlessly, comptime metaprogramming",
    weakness: "Rapidly evolving language syntax (pre-1.0)",
    desc: "A pragmatic replacement for C that eliminates macros and hidden control flows, delivering ultimate transparency and performance.",
    uses: ["Bun Runtime", "Game Development", "Embedded Firmware", "Systems"],
    code: "const std = @import(\"std\");\npub func main() void {\n    std.debug.print(\"Zero hidden flows\\n\", .{});\n}",
    url: "https://ziglang.org/"
  },
  {
    name: "Lua",
    year: "1993",
    type: "Embedded Scripting",
    category: "scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
    nick: "Featherweight & Fast",
    difficulty: "Easy",
    strength: "Tiny memory footprint (<300KB), fastest JIT interpreter (LuaJIT)",
    weakness: "1-indexed arrays and minimal standard library",
    desc: "The quintessential embeddable scripting language used inside game engines (Roblox, World of Warcraft, Neovim, Redis).",
    uses: ["Roblox Studio", "Game Scripting", "Redis Lua", "Neovim Configs"],
    code: "local langs = {\"Lua\", \"Python\", \"Go\"}\nfor i, l in ipairs(langs) do\n    print(i, l)\nend",
    url: "https://www.lua.org/"
  },
  {
    name: "Bash",
    year: "1989",
    type: "Shell & DevOps",
    category: "scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    nick: "Command Line Sovereign",
    difficulty: "Easy -> Medium",
    strength: "Native on every Unix/Linux server, immediate system glue",
    weakness: "Fragile quoting rules and cryptic syntax",
    desc: "The ubiquitous Unix command processor powering system administration, continuous integration (CI/CD), and server automation.",
    uses: ["CI/CD Pipelines", "Linux SysAdmin", "Docker Scripts", "Automation"],
    code: "#!/usr/bin/env bash\nfor lang in Python Rust Go; do\n  echo \"Checking $lang env...\"\ndone",
    url: "https://www.gnu.org/software/bash/"
  },
  {
    name: "R",
    year: "1993",
    type: "Statistical Computing",
    category: "data",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    nick: "The Statistician",
    difficulty: "Medium",
    strength: "Unmatched statistical modeling, CRAN packages, ggplot2 graphics",
    weakness: "Steep unconventional matrix and vector syntax quirks",
    desc: "Tailor-made for data scientists, statisticians, and researchers conducting complex statistical analysis and visual charts.",
    uses: ["Biostatistics", "ggplot2 Visuals", "Clinical Research", "Finance"],
    code: "x <- c(10, 20, 30, 40)\nsummary(x)\nplot(x, main=\"Data Curve\")",
    url: "https://www.r-project.org/"
  },
  {
    name: "Julia",
    year: "2012",
    type: "Scientific Computing",
    category: "data",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg",
    nick: "Speed of C, Simplicity of Python",
    difficulty: "Medium",
    strength: "Solves the two-language problem with multiple dispatch and LLVM JIT speed",
    weakness: "First-plot latency overhead (Time to First Plot)",
    desc: "Designed to combine Python's mathematical expressiveness with C's raw execution speed for scientific simulation and AI.",
    uses: ["Differential Equations", "Climate Modeling", "Machine Learning", "Physics"],
    code: "function simulate(n::Int)\n    return [x^2 for x in 1:n]\nend\nprintln(simulate(5))",
    url: "https://julialang.org/"
  },
  {
    name: "Solidity",
    year: "2014",
    type: "Smart Contracts",
    category: "backend",
    icon: "https://cdn.simpleicons.org/solidity",
    nick: "Blockchain Logic",
    difficulty: "Medium -> Hard",
    strength: "Global standard for Ethereum Virtual Machine (EVM) smart contracts",
    weakness: "Irreversible deployment: bugs lead to permanent financial loss",
    desc: "Contract-oriented language powering decentralized finance (DeFi), NFTs, and automated escrow logic on Ethereum and EVM chains.",
    uses: ["Ethereum", "DeFi Protocols", "NFTs", "Decentralized Escrows"],
    code: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\ncontract Vault {\n    uint256 public balance;\n}",
    url: "https://soliditylang.org/"
  },
  {
    name: "GDScript",
    year: "2014",
    type: "Game Scripting",
    category: "game",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
    nick: "Godot's Soul",
    difficulty: "Easy",
    strength: "Seamless integration with Godot Engine nodes, rapid game prototyping",
    weakness: "Coupled exclusively to Godot game projects",
    desc: "A lightweight Python-like scripting language built specifically for designing 2D and 3D indie games inside the open-source Godot engine.",
    uses: ["Godot Engine", "2D Platformers", "3D Indie Games", "Game Jams"],
    code: "extends CharacterBody2D\nfunc _physics_process(delta):\n    move_and_slide()",
    url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/"
  },
  {
    name: "Scala",
    year: "2004",
    type: "Functional & OOP",
    category: "functional",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
    nick: "The JVM Powerhouse",
    difficulty: "Hard",
    strength: "Advanced type system, deep functional programming, Apache Spark engine",
    weakness: "High conceptual ceiling and longer compilation times",
    desc: "Seamlessly fuses object-oriented design and advanced functional paradigms on the JVM. The core engine behind Apache Spark.",
    uses: ["Apache Spark", "Big Data", "Akka Systems", "Distributed Analytics"],
    code: "object Main extends App {\n  val langs = List(\"Scala\", \"Kotlin\")\n  langs.foreach(println)\n}",
    url: "https://www.scala-lang.org/"
  },
  {
    name: "Clojure",
    year: "2007",
    type: "Modern Lisp",
    category: "functional",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg",
    nick: "Pragmatic Lisp on JVM",
    difficulty: "Hard",
    strength: "Persistent immutable data structures, clean concurrency with STM",
    weakness: "Heavy parentheses syntax and dense Java interop stacktraces",
    desc: "A modern dynamic Lisp dialect hosted on the JVM that emphasizes simplicity, immutability, and state-of-the-art concurrency.",
    uses: ["Fintech", "Data Processing", "Fullstack ClojureScript", "Analytics"],
    code: "(defn greet [name]\n  (str \"Hello, \" name \"!\"))\n(println (greet \"Zoo\"))",
    url: "https://clojure.org/"
  },
  {
    name: "Assembly",
    year: "1949",
    type: "Machine Architecture",
    category: "hardware",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg",
    nick: "Direct Silicon",
    difficulty: "Hard",
    strength: "Direct instruction set control, microsecond cycle precision",
    weakness: "Completely non-portable across different CPU architectures (x86 vs ARM)",
    desc: "Human-readable machine instructions that speak directly to processor registers, bootloaders, and firmware.",
    uses: ["Bootloaders", "Hardware Drivers", "Reverse Engineering", "OS Kernels"],
    code: "section .text\nglobal _start\n_start:\n    mov eax, 1\n    int 0x80",
    url: "https://en.wikipedia.org/wiki/Assembly_language"
  },
  {
    name: "HTML",
    year: "1993",
    type: "Hypertext Markup",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    nick: "The Web's Skeleton",
    difficulty: "Easy",
    strength: "Universal accessibility, SEO foundation, semantic web structure",
    weakness: "Not a programming language; requires CSS & JS for styling and logic",
    desc: "The foundational markup language that structures every website, web app, and document across the global internet.",
    uses: ["Web Pages", "Semantic Markup", "Accessibility", "SEO"],
    code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <body><h1>Hello CodeZoo</h1></body>\n</html>",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS",
    year: "1996",
    type: "Style & Layout",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    nick: "The Visual Artist",
    difficulty: "Easy -> Medium",
    strength: "Declarative layouts (Flexbox, Grid), hardware-accelerated animations",
    weakness: "Cascading specificity conflicts in massive legacy codebases",
    desc: "Breathes life, typography, responsive layouts, and interactive animations into raw HTML structure.",
    uses: ["Responsive Design", "Flexbox & Grid", "Animations", "UI Themes"],
    code: ".zoo-card {\n  display: flex;\n  border-radius: 18px;\n  box-shadow: 4px 5px 0 #182033;\n}",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "Fortran",
    year: "1957",
    type: "Numerical Computing",
    category: "classic",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fortran/fortran-original.svg",
    nick: "Formula Translation",
    difficulty: "Medium -> Hard",
    strength: "Unsurpassed multidimensional array processing speed on supercomputers",
    weakness: "Dated paradigm conventions for general-purpose applications",
    desc: "The earliest high-level language, still actively powering weather forecasting, aerospace physics, and numerical libraries (BLAS/LAPACK).",
    uses: ["Supercomputing", "Weather Forecasting", "Aerospace", "BLAS/LAPACK"],
    code: "program hello\n  print *, 'Scientific computing legacy'\nend program hello",
    url: "https://fortran-lang.org/"
  },
  {
    name: "COBOL",
    year: "1959",
    type: "Business Mainframe",
    category: "classic",
    icon: "https://cdn.simpleicons.org/gnubash/182033",
    nick: "Banking Patriarch",
    difficulty: "Medium",
    strength: "Legendary decimal precision arithmetic, unmatched mainframe transaction throughput",
    weakness: "Extreme English-like verbosity and shrinking developer talent pool",
    desc: "Grace Hopper's business-oriented giant that still processes trillions of dollars in daily ATM, banking, and insurance transactions.",
    uses: ["Mainframe Banking", "ATM Transactions", "Insurance Systems", "Government"],
    code: "IDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO.\nPROCEDURE DIVISION.\n    DISPLAY 'BANKING TX VALID'.\n    STOP RUN.",
    url: "https://en.wikipedia.org/wiki/COBOL"
  },
  {
    name: "Lisp",
    year: "1958",
    type: "Symbolic & AI",
    category: "classic",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg",
    nick: "Code as Data (Homoiconicity)",
    difficulty: "Hard",
    strength: "Groundbreaking macro metaprogramming, treating code as structured lists",
    weakness: "Abundant nested parentheses take time to master visually",
    desc: "John McCarthy's historic breakthrough that pioneered recursion, dynamic typing, garbage collection, and early AI research.",
    uses: ["AI Research", "Emacs (elisp)", "Symbolic Computing", "Compilers"],
    code: "(defun factorial (n)\n  (if (<= n 1) 1\n      (* n (factorial (- n 1)))))",
    url: "https://lisp-lang.org/"
  },
  {
    name: "Perl",
    year: "1987",
    type: "Text Processing",
    category: "scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg",
    nick: "Swiss Army Chainsaw",
    difficulty: "Medium",
    strength: "Unrivaled regular expression parsing and string manipulation",
    weakness: "There's more than one way to do it (can lead to write-only code)",
    desc: "Larry Wall's Unix text-munging powerhouse that kept the early web and bioinformatics running for decades.",
    uses: ["Bioinformatics", "Log Parsing", "System Administration", "Legacy Web"],
    code: "my @langs = ('Perl', 'Python', 'Ruby');\nforeach my $lang (@langs) {\n    print \"Processing: $lang\\n\";\n}",
    url: "https://www.perl.org/"
  },
  {
    name: "Nim",
    year: "2008",
    type: "Expressive Systems",
    category: "systems",
    icon: "https://cdn.simpleicons.org/nim/FFE953",
    nick: "Python Syntax, C Speed",
    difficulty: "Medium -> Hard",
    strength: "Compiles directly to clean C/C++, macro system, GC-tuning options",
    weakness: "Smaller industry adoption compared to Rust and Go",
    desc: "Combines Python's clean indentation syntax with C's raw execution speed, compiling directly to C without runtime overhead.",
    uses: ["Game Tools", "Security Tools", "Cross-Platform Binaries", "Scientific"],
    code: "import strformat\nfor i in 1..3:\n  echo fmt\"Item {i}: Compiled to C\"",
    url: "https://nim-lang.org/"
  },
  {
    name: "Erlang",
    year: "1986",
    type: "Telecom Actor Model",
    category: "functional",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original.svg",
    nick: "Nine Nines Reliability",
    difficulty: "Hard",
    strength: "Hot code reloading, automatic crash recovery, distributed actor model",
    weakness: "Prolog-style syntax unfamiliar to C-family engineers",
    desc: "Invented at Ericsson to deliver 99.9999999% uptime for global telecommunication networks and real-time messaging servers.",
    uses: ["Telecommunications", "WhatsApp Servers", "RabbitMQ", "Distributed Mesh"],
    code: "-module(hello).\n-export([start/0]).\nstart() -> io:format(\"High-availability node ready~n\").",
    url: "https://www.erlang.org/"
  },
  {
    name: "OCaml",
    year: "1996",
    type: "Typed Functional",
    category: "functional",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg",
    nick: "Pragmatic Type Safety",
    difficulty: "Hard",
    strength: "Hindley-Milner type inference, extremely fast native compiler",
    weakness: "Historically single-threaded runtime (prior to OCaml 5 multicore)",
    desc: "Industrial functional programming language renowned for type soundness. Powers compilers, static analyzers, and fintech trading systems.",
    uses: ["Jane Street Fintech", "Compilers", "Coq Theorem Prover", "Static Analysis"],
    code: "let rec sum list = match list with\n  | [] -> 0\n  | h :: t -> h + sum t;;\nprint_int (sum [1; 2; 3; 4]);;",
    url: "https://ocaml.org/"
  },
  {
    name: "Verilog",
    year: "1984",
    type: "Hardware Description",
    category: "hardware",
    icon: "https://cdn.simpleicons.org/raspberrypi/C51A4A",
    nick: "Silicon Design HDL",
    difficulty: "Hard",
    strength: "Standard for ASIC and FPGA digital circuit synthesis",
    weakness: "Synthesizes physical wire gates, completely unlike sequential software",
    desc: "Hardware Description Language (HDL) used by electrical engineers to model and verify physical silicon chips and microprocessors.",
    uses: ["FPGA Design", "ASIC Synthesis", "Microprocessors", "Chip Verification"],
    code: "module inverter (input wire a, output wire y);\n  assign y = ~a;\nendmodule",
    url: "https://en.wikipedia.org/wiki/Verilog"
  },
  {
    name: "VHDL",
    year: "1980",
    type: "Hardware Description",
    category: "hardware",
    icon: "https://cdn.simpleicons.org/alibabacloud/182033",
    nick: "Strict Hardware Spec",
    difficulty: "Hard",
    strength: "Strict typing, deterministic circuit simulation, aerospace verification",
    weakness: "Very verbose Ada-like hardware syntax",
    desc: "Commissioned by the US Department of Defense for formal behavioral and structural hardware description in aerospace and defense.",
    uses: ["Defense Systems", "Aerospace Avionics", "FPGA Circuits", "Radiation-Hardened"],
    code: "entity AndGate is\n  port(A, B: in bit; Y: out bit);\nend entity;\narchitecture arch of AndGate is\nbegin\n  Y <= A and B;\nend arch;",
    url: "https://en.wikipedia.org/wiki/VHDL"
  },
  {
    name: "GLSL",
    year: "2004",
    type: "Shader Graphics",
    category: "game",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg",
    nick: "Pixel Wizard",
    difficulty: "Hard",
    strength: "Massively parallel SIMD processing across millions of GPU cores",
    weakness: "Difficult to debug on GPU pipelines with limited print capabilities",
    desc: "OpenGL Shading Language executing directly on the GPU to compute 3D lighting, post-processing filters, and ray-marching visual shaders.",
    uses: ["WebGL", "Three.js Shaders", "3D Lighting", "Visual Effects"],
    code: "precision mediump float;\nvarying vec2 vUv;\nvoid main() {\n    gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);\n}",
    url: "https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language"
  },
  {
    name: "Prolog",
    year: "1972",
    type: "Logic Programming",
    category: "classic",
    icon: "https://cdn.simpleicons.org/semanticweb/E63946",
    nick: "Declarative Logic",
    difficulty: "Hard",
    strength: "First-order predicate logic, automated backtracking deduction",
    weakness: "Unintuitive recursion model for traditional software development",
    desc: "Expresses knowledge in terms of facts and rules. Queries deduce logical truths automatically through unified resolution theorem proving.",
    uses: ["Expert Systems", "Knowledge Graphs", "Natural Language Parsing", "Legal Logic"],
    code: "father(john, bob).\nparent(X, Y) :- father(X, Y).\n?- parent(john, Bob).",
    url: "https://en.wikipedia.org/wiki/Prolog"
  },
  {
    name: "Ada",
    year: "1980",
    type: "Safety-Critical",
    category: "systems",
    icon: "https://cdn.simpleicons.org/gnubash/004B87",
    nick: "Zero-Failure Mission",
    difficulty: "Hard",
    strength: "Military-grade compile-time verification, safety invariants",
    weakness: "Rigid verbose syntax, specialized tooling niche",
    desc: "Engineered for mission-critical applications where software bugs risk human lives: commercial avionics (Boeing/Airbus), rail signaling, and defense.",
    uses: ["Avionics Flight Control", "High-Speed Rail", "Spaceflight", "Defense"],
    code: "with Ada.Text_IO; use Ada.Text_IO;\nprocedure Hello is\nbegin\n   Put_Line (\"Avionics online\");\nend Hello;",
    url: "https://www.adacore.com/about-ada"
  },
  {
    name: "MATLAB",
    year: "1984",
    type: "Matrix Mathematics",
    category: "data",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
    nick: "Engineering Simulation",
    difficulty: "Easy -> Medium",
    strength: "Vast verified engineering toolboxes, Simulink hardware emulation",
    weakness: "Expensive proprietary licensing model",
    desc: "The primary proprietary computational environment for electrical, mechanical, aerospace, and robotics engineering.",
    uses: ["Simulink", "Control Systems", "Signal Processing", "Automotive"],
    code: "A = [1 2; 3 4];\nB = inv(A);\ndisp(A * B);",
    url: "https://www.mathworks.com/products/matlab.html"
  },
  {
    name: "Crystal",
    year: "2014",
    type: "Compiled OOP",
    category: "systems",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/crystal/crystal-original.svg",
    nick: "Ruby's Elegance, C's Speed",
    difficulty: "Medium",
    strength: "Ruby-like syntax, static type checking with full inference, LLVM speed",
    weakness: "Smaller library ecosystem than Go or Rust",
    desc: "Combines Ruby's joyful developer syntax with compile-time type safety and high-speed native binary generation.",
    uses: ["High-Speed APIs", "CLI Utilities", "Web Frameworks (Lucky)", "Microservices"],
    code: "def fib(n : Int32) : Int32\n  n <= 1 ? n : fib(n - 1) + fib(n - 2)\nend\nputs fib(10)",
    url: "https://crystal-lang.org/"
  },
  {
    name: "F#",
    year: "2005",
    type: "Functional .NET",
    category: "functional",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fsharp/fsharp-original.svg",
    nick: "Succinct .NET",
    difficulty: "Medium -> Hard",
    strength: "Type providers connect external schemas cleanly, full access to .NET",
    weakness: "C# dominates the majority of .NET team mindshare",
    desc: "Microsoft's cross-platform functional-first programming language on .NET, delivering correctness, robust type inference, and immutability.",
    uses: ["Quantitative Finance", "Data Science on .NET", "Domain Modeling", "Cloud"],
    code: "let square x = x * x\n[1 .. 5] |> List.map square |> printfn \"%A\"",
    url: "https://fsharp.org/"
  },
  {
    name: "Haxe",
    year: "2005",
    type: "Cross-Compiler",
    category: "game",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haxe/haxe-original.svg",
    nick: "Universal Transpiler",
    difficulty: "Medium",
    strength: "Single codebase cross-compiles to C++, JS, Java, C#, and Python",
    weakness: "Debugging cross-generated target code can require deep platform familiarity",
    desc: "An open-source high-level toolkit that transpiles code seamlessly across multiple targets. Widely utilized in 2D indie gaming.",
    uses: ["Dead Cells Game", "Friday Night Funkin'", "Cross-Platform UI", "Web"],
    code: "class Test {\n  static function main() {\n    trace(\"Transpiled to any target!\");\n  }\n}",
    url: "https://haxe.org/"
  },
  {
    name: "Delphi",
    year: "1995",
    type: "Visual Pascal",
    category: "classic",
    icon: "https://cdn.simpleicons.org/delphi/EE1F35",
    nick: "Rapid Desktop Pioneer",
    difficulty: "Medium",
    strength: "Blistering fast native compilation and visual UI drag-and-drop builder",
    weakness: "Commercial licensing model and older developer community",
    desc: "Object Pascal powerhouse that pioneered modern visual desktop development in the 1990s and 2000s.",
    uses: ["Windows Desktop Apps", "Point of Sale (POS)", "Industrial Control", "Database Tools"],
    code: "procedure TForm1.Button1Click(Sender: TObject);\nbegin\n  ShowMessage('Native binary executing');\nend;",
    url: "https://www.embarcadero.com/products/delphi"
  },
  {
    name: "Objective-C",
    year: "1984",
    type: "Dynamic OOP",
    category: "mobile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg",
    nick: "The Cocoa Foundation",
    difficulty: "Medium -> Hard",
    strength: "Smalltalk dynamic message passing layered on top of bare C",
    weakness: "Verbose square-bracket messaging syntax superseded by Swift",
    desc: "The architectural rock that powered NeXTSTEP, macOS, and the original App Store explosion on early iPhones.",
    uses: ["Legacy iOS/macOS", "Apple Frameworks", "C Interop Libraries", "NeXT History"],
    code: "#import <Foundation/Foundation.h>\nint main() {\n    NSLog(@\"Dynamic dispatch messaging ready\");\n    return 0;\n}",
    url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/"
  },
  {
    name: "Visual Basic",
    year: "1991",
    type: "Event-Driven RAD",
    category: "classic",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    nick: "The Democratizer",
    difficulty: "Easy",
    strength: "Instant visual form prototyping with approachable syntax",
    weakness: "Largely superseded by modern C# and web frameworks",
    desc: "Democratized software creation for millions in the 1990s by allowing developers to simply drag UI widgets and write basic logic.",
    uses: ["Legacy Windows Software", "Excel Macros (VBA)", "Internal Corporate Tools"],
    code: "Private Sub Command1_Click()\n    MsgBox \"Rapid application creation\"\nEnd Sub",
    url: "https://learn.microsoft.com/dotnet/visual-basic/"
  },
  {
    name: "Pascal",
    year: "1970",
    type: "Structured Programming",
    category: "classic",
    icon: "https://cdn.simpleicons.org/gnubash/003366",
    nick: "Academic Discipline",
    difficulty: "Easy -> Medium",
    strength: "Enforces disciplined structured programming and clean type boundaries",
    weakness: "Limited modern commercial adoption outside Delphi and Free Pascal",
    desc: "Niklaus Wirth's classic designed to teach computer science students disciplined structured coding and data structures.",
    uses: ["CS Education", "Free Pascal", "Early Macintosh OS", "Compilers"],
    code: "program HelloWorld;\nbegin\n  writeln('Structured and disciplined code');\nend.",
    url: "https://en.wikipedia.org/wiki/Pascal_(programming_language)"
  },
  {
    name: "BASIC",
    year: "1964",
    type: "Beginner's Instruction",
    category: "classic",
    icon: "https://cdn.simpleicons.org/gnubash/333333",
    nick: "The Gateway Language",
    difficulty: "Easy",
    strength: "Unprecedented beginner accessibility with line numbers and plain commands",
    weakness: "Line numbers and unrestricted GOTO statements led to spaghetti logic",
    desc: "Created at Dartmouth in 1964 to give non-science students easy access to computers. Shipped in ROM with every 1980s personal microcomputer.",
    uses: ["Retro Computing", "Commodore 64", "TI-84 Calculators", "Computer History"],
    code: "10 PRINT \"HELLO WORLD\"\n20 GOTO 10",
    url: "https://en.wikipedia.org/wiki/BASIC"
  },
  {
    name: "Scheme",
    year: "1975",
    type: "Minimalist Lisp",
    category: "functional",
    icon: "https://cdn.simpleicons.org/gnu/224488",
    nick: "Pure & Minimalist",
    difficulty: "Medium -> Hard",
    strength: "Lexical scoping, first-class continuations, clean design used in SICP",
    weakness: "Fragmented standards (R5RS vs R7RS) across distinct interpreters",
    desc: "A minimalist Lisp dialect famous as the basis for MIT's legendary Structure and Interpretation of Computer Programs (SICP).",
    uses: ["SICP Education", "Guile Extensions", "Language Prototyping", "GIMP Script-Fu"],
    code: "(define (square x) (* x x))\n(display (square 5))",
    url: "http://www.scheme-reports.org/"
  },
  {
    name: "Groovy",
    year: "2003",
    type: "Dynamic JVM",
    category: "scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg",
    nick: "Dynamic Java Companion",
    difficulty: "Easy -> Medium",
    strength: "Seamless Java interop, powerful closure DSLs, Gradle build files",
    weakness: "Dynamic runtime overhead compared to static Kotlin",
    desc: "An agile dynamic language for the Apache JVM ecosystem that makes writing Gradle build scripts and Jenkins pipelines a breeze.",
    uses: ["Gradle Build Scripts", "Jenkins CI/CD", "Grails Framework", "JVM Scripting"],
    code: "def list = ['Groovy', 'Java', 'Kotlin']\nprintln list.collect { it.toUpperCase() }",
    url: "https://groovy-lang.org/"
  },
  {
    name: "HLSL",
    year: "2002",
    type: "DirectX Shaders",
    category: "game",
    icon: "https://cdn.simpleicons.org/nvidia",
    nick: "DirectX Shader Engine",
    difficulty: "Hard",
    strength: "Direct integration with Microsoft DirectX rendering pipelines",
    weakness: "Tied closely to DirectX ecosystems",
    desc: "High-Level Shader Language developed by Microsoft to code custom vertex and pixel shaders for Xbox and Windows 3D video games.",
    uses: ["DirectX 12", "Xbox Games", "Unreal Shaders", "Ray Tracing"],
    code: "float4 PSMain(float4 pos : SV_POSITION) : SV_TARGET {\n    return float4(1.0f, 0.5f, 0.2f, 1.0f);\n}",
    url: "https://learn.microsoft.com/windows/win32/direct3dhlsl/dx-graphics-hlsl"
  },
  {
    name: "ABAP",
    year: "1983",
    type: "Enterprise ERP",
    category: "backend",
    icon: "https://cdn.simpleicons.org/sap/008FD3",
    nick: "SAP Core Engine",
    difficulty: "Medium -> Hard",
    strength: "Deep native integration with global SAP enterprise supply chains",
    weakness: "Proprietary locked-in SAP enterprise stack",
    desc: "Powers core transactional business workflows and supply chain software inside multinational corporations running SAP ERP.",
    uses: ["SAP Systems", "Supply Chain", "Corporate Finance", "ERP Databases"],
    code: "WRITE: / 'Enterprise transaction processed.'.",
    url: "https://www.sap.com/products/technology-platform/abap.html"
  },
  {
    name: "D",
    year: "2001",
    type: "Modern Native",
    category: "systems",
    icon: "https://cdn.simpleicons.org/d/B03931",
    nick: "Pragmatic C++",
    difficulty: "Hard",
    strength: "Blazing fast compilation, compile-time function evaluation (CTFE), C speed",
    weakness: "Smaller market share compared to C++ and Rust",
    desc: "Engineered to eliminate common C++ architectural headaches with clean modular compilation, optional garbage collection, and raw pointer control.",
    uses: ["Games", "High-Performance Tools", "Systems Programming", "Compilers"],
    code: "import std.stdio;\nvoid main() {\n    writeln(\"Systems code with modern modules\");\n}",
    url: "https://dlang.org/"
  },
  {
    name: "Mojo",
    year: "2023",
    type: "AI Hardware Speed",
    category: "data",
    icon: "https://cdn.simpleicons.org/fastapi",
    nick: "Python for Hardware AI",
    difficulty: "Medium -> Hard",
    strength: "Combines Python's usability with 68,000x faster AI hardware acceleration via MLIR",
    weakness: "Very young ecosystem and evolving specifications",
    desc: "Designed by Chris Lattner (creator of LLVM & Swift) to give Python developers direct control over multi-core hardware, GPUs, and AI accelerators.",
    uses: ["AI Accelerators", "Tensor Inference", "LLM Serving", "GPU Computing"],
    code: "fn main():\n    let msg: String = \"68000x faster AI\"\n    print(msg)",
    url: "https://www.modular.com/max/mojo"
  },
  {
    name: "WebAssembly",
    year: "2017",
    type: "Binary Web Bytecode",
    category: "frontend",
    icon: "https://cdn.simpleicons.org/webassembly",
    nick: "Near-Native Web VM",
    difficulty: "Hard",
    strength: "Compact binary format executing at near-native speed inside all web browsers",
    weakness: "Not designed to be written by hand; serves as a compilation target",
    desc: "W3C open web standard that enables C++, Rust, and Go code to run inside browser engines at blazing native speed.",
    uses: ["Figma in Browser", "Adobe Photoshop Web", "Game Ports", "Cloud Edge"],
    code: "(module\n  (func $add (param $a i32) (param $b i32) (result i32)\n    local.get $a\n    local.get $b\n    i32.add))",
    url: "https://webassembly.org/"
  },
  {
    name: "GraphQL",
    year: "2015",
    type: "Data Query Language",
    category: "database",
    icon: "https://cdn.simpleicons.org/graphql",
    nick: "Precise Data Fetching",
    difficulty: "Easy -> Medium",
    strength: "Clients request exact fields needed, preventing over-fetching and multiple round trips",
    weakness: "More complex server caching and rate-limiting compared to standard REST",
    desc: "Facebook's query language for APIs that gives clients full power to ask for exactly what they need and nothing more.",
    uses: ["API Gateways", "Mobile Backends", "Headless CMS", "Microservice Aggregation"],
    code: "query GetLanguages {\n  languages(category: \"systems\") {\n    name\n    year\n    strength\n  }\n}",
    url: "https://graphql.org/"
  },
  {
    name: "Sass",
    year: "2006",
    type: "CSS Preprocessor",
    category: "frontend",
    icon: "https://cdn.simpleicons.org/sass",
    nick: "CSS with Superpowers",
    difficulty: "Easy",
    strength: "Nesting, mixins, functions, and modular design before native CSS caught up",
    weakness: "Requires compilation step to produce standard CSS",
    desc: "The mature, stable, and powerful CSS extension language that powers major UI design systems across the globe.",
    uses: ["Bootstrap UI", "Design Systems", "Modular Stylesheets", "Theme Engineering"],
    code: "$primary: #5c3cf6;\n.zoo-card {\n  color: $primary;\n  &:hover { transform: translateY(-4px); }\n}",
    url: "https://sass-lang.com/"
  },
  {
    name: "PowerShell",
    year: "2006",
    type: "Object-Oriented Shell",
    category: "scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
    nick: "Object Automation",
    difficulty: "Medium",
    strength: "Pipes real .NET objects rather than plain text streams, unrivaled Windows/Azure automation",
    weakness: "Long cmdlet naming conventions can feel verbose",
    desc: "Microsoft's cross-platform task automation and configuration framework built on .NET that streams rich structured objects.",
    uses: ["Azure Cloud", "Windows Administration", "Active Directory", "DevOps"],
    code: "Get-Process | Where-Object WorkingSet -gt 100MB | Select-Object Name, WS",
    url: "https://learn.microsoft.com/powershell/"
  },
  {
    name: "Racket",
    year: "1995",
    type: "Language-Oriented",
    category: "functional",
    icon: "https://cdn.simpleicons.org/racket",
    nick: "The Language Lab",
    difficulty: "Medium -> Hard",
    strength: "Superb macro system enabling you to invent brand-new domain-specific languages",
    weakness: "Less mainstream commercial enterprise usage",
    desc: "A programmable programming language descended from Scheme that empowers developers to create entirely new computer languages.",
    uses: ["Programming Language Theory", "CS Pedagogy", "DSL Creation", "Mathematics"],
    code: "#lang racket\n(define (fib n)\n  (if (<= n 2) 1 (+ (fib (- n 1)) (fib (- n 2)))))\n(fib 10)",
    url: "https://racket-lang.org/"
  },
  {
    name: "V",
    year: "2019",
    type: "Simple Fast Systems",
    category: "systems",
    icon: "https://cdn.simpleicons.org/v/5D87A8",
    nick: "Clean & Ultra-Fast",
    difficulty: "Easy -> Medium",
    strength: "Compiles 1.2 million lines of code per second, auto-free memory without GC",
    weakness: "Young community still formalizing standard library edge cases",
    desc: "A simple, fast, safe, and compiled language designed for building maintainable software with zero dependencies.",
    uses: ["CLI Tools", "Lightweight Web Servers", "GUI Apps", "Systems"],
    code: "fn main() {\n    name := 'V Language'\n    println('Fast compiled ${name}')\n}",
    url: "https://vlang.io/"
  },
  {
    name: "Ballerina",
    year: "2017",
    type: "Cloud-Native Integration",
    category: "backend",
    icon: "https://cdn.simpleicons.org/apachesuperset",
    nick: "API-First Networking",
    difficulty: "Medium",
    strength: "Code is simultaneously a visual sequence diagram, native network types",
    weakness: "Specialized focus primarily on cloud service orchestration",
    desc: "An open-source cloud-native language optimized for integration, microservices orchestration, and network communications.",
    uses: ["API Orchestration", "Enterprise Integration", "gRPC Services", "Microservices"],
    code: "import ballerina/http;\nservice /greet on new http:Listener(8080) {\n    resource function get hello() returns string => \"Hello APIs!\";\n}",
    url: "https://ballerina.io/"
  },
  {
    name: "Smalltalk",
    year: "1972",
    type: "Pure Object-Oriented",
    category: "classic",
    icon: "https://cdn.simpleicons.org/gnu/224488",
    nick: "Everything is an Object",
    difficulty: "Medium",
    strength: "Live image-based coding, pure message passing, inspired GUI computing",
    weakness: "Isolated image environment diverges from file-based git workflows",
    desc: "Alan Kay's historic language that established modern Object-Oriented Programming, visual desktop GUIs, and live debugging environments.",
    uses: ["Object Research", "Squeak", "Pharo", "GUI Computing History"],
    code: "Transcript show: 'Everything in Smalltalk is an object'; cr.",
    url: "https://pharo.org/"
  },
  {
    name: "Apex",
    year: "2006",
    type: "Cloud Business Logic",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
    nick: "Salesforce Cloud",
    difficulty: "Medium",
    strength: "Direct native binding to Salesforce CRM data entities and triggers",
    weakness: "Strict governor execution limits and proprietary Salesforce lock-in",
    desc: "A strongly typed, object-oriented language that allows developers to execute transaction control statements on the Salesforce platform.",
    uses: ["Salesforce CRM", "Enterprise Automation", "Cloud Database Triggers"],
    code: "trigger AccountTrigger on Account (before insert) {\n    for(Account a : Trigger.new) {\n        a.Description = 'CRM verified';\n    }\n}",
    url: "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/"
  },
  {
    name: "Hack",
    year: "2014",
    type: "Typed PHP on HHVM",
    category: "backend",
    icon: "https://cdn.simpleicons.org/meta/0081FB",
    nick: "Meta's High-Speed Web",
    difficulty: "Medium",
    strength: "Instant gradual type checking at Facebook scale on the HHVM engine",
    weakness: "Tightly coupled to Meta's ecosystem and HHVM runtime",
    desc: "Meta's typed evolution of PHP running on the HipHop Virtual Machine (HHVM) that powers the immense scale of Facebook and Instagram.",
    uses: ["Meta Scale Infrastructure", "Facebook Web", "High-Volume Web APIs"],
    code: "<?hh\n<<__EntryPoint>>\nfunction main(): void {\n  echo \"Strict typing at Meta scale\\n\";\n}",
    url: "https://hacklang.org/"
  },
  {
    name: "ActionScript",
    year: "1998",
    type: "Flash & Rich Media",
    category: "classic",
    icon: "https://cdn.simpleicons.org/ansible/EE0000",
    nick: "Golden Era of Flash",
    difficulty: "Easy -> Medium",
    strength: "Pioneered interactive rich internet animations, web games, and video streaming",
    weakness: "Flash player deprecated and retired across modern web browsers",
    desc: "The scripting language that powered Flash animations, YouTube's early video player, and legendary web games in the early 2000s.",
    uses: ["Flash Web Games", "Rich Interactive Media", "Internet History", "Adobe AIR"],
    code: "package {\n  import flash.display.Sprite;\n  public class Main extends Sprite {\n    trace(\"Welcome to the golden age of web games\");\n  }\n}",
    url: "https://en.wikipedia.org/wiki/ActionScript"
  },
  {
    name: "Tcl",
    year: "1988",
    type: "Tool Command Language",
    category: "scripting",
    icon: "https://cdn.simpleicons.org/linux/1565C0",
    nick: "Hardware Automation Glue",
    difficulty: "Easy -> Medium",
    strength: "Simple string-based substitution model, native Tk graphical interface",
    weakness: "Lack of static types can lead to runtime substitution bugs",
    desc: "Created by John Ousterhout as a reusable command language. Still widely used for automating EDA chip design tools and router testbeds.",
    uses: ["Chip Design Automation (EDA)", "Tk GUI Framework", "Router Testing", "Cisco CLI"],
    code: "set langs [list Tcl Python Perl]\nforeach l $langs {\n    puts \"Executing EDA script: $l\"\n}",
    url: "https://www.tcl-lang.org/"
  },
  {
    name: "Awk",
    year: "1977",
    type: "Pattern Scanning",
    category: "scripting",
    icon: "https://cdn.simpleicons.org/gnubash/333333",
    nick: "Log Crunching Legend",
    difficulty: "Easy -> Medium",
    strength: "Instant single-line data parsing, field-based tokenizing, built into all POSIX systems",
    weakness: "Not intended for complex modular application development",
    desc: "Created by Aho, Weinberger, and Kernighan. The definitive command-line utility for filtering server access logs and structured reports.",
    uses: ["Log Analysis", "Server Analytics", "Data Extraction", "CSV Parsing"],
    code: "awk -F',' '$3 > 50 { print \"User: \" $1 \", Score: \" $3 }' data.csv",
    url: "https://www.gnu.org/software/gawk/"
  },
  {
    name: "PostScript",
    year: "1982",
    type: "Page Description",
    category: "classic",
    icon: "https://cdn.simpleicons.org/fontbase/FF2A00",
    nick: "Vector Publishing Pioneer",
    difficulty: "Hard",
    strength: "Turing-complete stack-based vector drawing, standard for high-res laser printing",
    weakness: "Stack-based reverse Polish notation is difficult for humans to write directly",
    desc: "John Warnock and Chuck Geschke's breakthrough at Adobe that triggered the desktop publishing revolution and directly fathered the PDF format.",
    uses: ["Laser Printers", "PDF Foundation", "High-Resolution Typography", "Digital Printing"],
    code: "/Helvetica findfont 24 scalefont setfont\n100 200 moveto\n(Desktop Publishing Revolution) show\nshowpage",
    url: "https://en.wikipedia.org/wiki/PostScript"
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

// Helper to render real logo photo or fallback text
function renderLangIcon(item, className = "card-avatar-img") {
  if (item.icon && (item.icon.startsWith("http://") || item.icon.startsWith("https://") || item.icon.endsWith(".svg") || item.icon.endsWith(".png"))) {
    return `<img src="${item.icon}" alt="${item.name} logo" class="${className}" loading="lazy" onerror="this.onerror=null;this.parentElement.innerHTML='${item.name.slice(0, 2).toUpperCase()}';">`;
  }
  return `<span>${item.icon || item.name.slice(0, 2).toUpperCase()}</span>`;
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
          ${renderLangIcon(item)}
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

  modalIcon.innerHTML = renderLangIcon(item, "card-avatar-img");
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
    { label: "Language", fn: l => `<span class="compare-lang-tag">${renderLangIcon(l, "compare-logo-sm")} <strong>${l.name}</strong></span>` },
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
          ${renderLangIcon(winner, "matcher-avatar-img")}
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
          <button class="btn-sm" id="matcherRunnerUpBtn" style="display:inline-flex; align-items:center; gap:6px;">
            ${renderLangIcon(runnerUp, "compare-logo-sm")} <span>${runnerUp.name}</span>
          </button>
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
