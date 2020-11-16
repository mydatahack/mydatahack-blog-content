(defun fib(n)
  "Retun the nth Fibonaccie number."
  (if (< n 2)
    n
    (+ (fib ( - n 1))
      (fib (- n 2))
    )
  )
)

; this does not execute the function... we need to use REPL to call it.
(fib 30)