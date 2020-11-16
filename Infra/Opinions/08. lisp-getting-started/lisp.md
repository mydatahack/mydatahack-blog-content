# Getting Started with Lisp

There are good reasons why you want to learn Lisp. As Paul Graham said, the reason why you want to learn it is the same as the reason why you want to learn Latin. You probably won't use Latin. But, the knowledge will make you see languages you use in a more enriched way. You don't need to know Lisp to write the next big app, but knowing it will make you a better problem solver. 

Here are some inspirations you need to get started with Lisp. 

<a href="http://www.paulgraham.com/avg.html" target="_blank">Beating the averages</a> by Paul Graham

<a href="http://www.catb.org/~esr/faqs/hacker-howto.html" target="_blank">How To Become a Hacker</a> by Eric Steven Raymond

Ok, now you are inspired and want to learn Lisp. Then, the problem is that Lisp has dialects. We need to choose one. 

Lisp these days has three major dialects, Common Lisp, Scheme, and Clojure. They are similar and different. Here are some of the important differences that you may want to consider when you choose which one. At the end of the day, it really doesn't matter which one you pick unless you need to work on a project that uses one of them. If you are learning it to broaden your programming knowledge, any of them is fine. In this post, I chose Common Lisp because I don't want to have anything to do with JVM and it seems to be used in a real world scenario more.

<em>Common Lisp</em>
- Paradigm agnostic (both functional and OOP).
- Used more in real world problems.

<em>Scheme</em>
- Similar to Common Lisp.
- Used more in an academic context, like computer science and programming language research.

<em>Clojure</em>
- Favours functional programming.
- Runs on JVM (this is good and bad...)

(1) Install SBCL

Use command line for Linux and Mac. Use <a href="http://www.iqool.de/lispstick.html" target="_blank">LispStick</a> for Windows. <a href="http://www.sbcl.org/" target="_blank">SBCL</a> (Steel Bank Common Lisp) is a high performance Common Lisp compiler. It provides an interactive environment and runs Lisp through the command line.

<pre>
# mac
brew install sbcl

# linux
sudo apt-get install sbcl
```
</pre>

(2) Install Quicklisp (package manager)

<pre>
curl -o /tmp/ql.lisp http://beta.quicklisp.org/quicklisp.lisp

sbcl --no-sysinit --no-userinit --load /tmp/ql.lisp \
       --eval '(quicklisp-quickstart:install :path "~/.quicklisp")' \
       --eval '(ql:add-to-init-file)' \
       --quit
```
</pre>

(3) Run it in an interactive mode

We can just type `sbcl` in the bash. Then run whatever. Here is the hello world!

<pre>
(format t "Hello World")
</pre>

You can exit from REPL by calling quit.

<pre>
(quit)
</pre>

(4) Run it from a file

Create a file with .lisp. For an IDE, VS code with lips extension will be sufficient to start with.

fib.lisp

<pre>
(defun fib(n)
  "Retun the nth Fibonaccie number."
  (if (< n 2)
    n
    (+ (fib ( - n 1))
      (fib (- n 2))
    )
  )
)
</pre>

Then, run the function with `sbcl`

<pre>
sbcl --load fib.lisp
</pre>

Then, run the function in the console.

<pre>
(fib 30)
</pre>

(5) Compiling Lisp

Lisp is both compiled and interpreted language. We can run it interpreted or compiled.

Start the REPL and this will run the function in an interpreted way.
<pre>
(load "fib.lisp")
</pre>

This will compile the file in the same folder. It will create `fib.fasl` file.

<pre>
(load (compile-file "fib.lisp"))
</pre>

Once you have the file, you can load the compiled file.

<pre>
sbcl --load fib.fasl
</per>

Ok, that's the basic. This will give you enough to get started with Lisp!
