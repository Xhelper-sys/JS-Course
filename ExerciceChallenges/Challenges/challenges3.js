Challenge Exercises JS

// 3k.
`Items (${2*1 + 2*1}):                $${((20.95*100)*2+(7.99*100)*2)*0.01}`

// 3l.
`Shipping & handling:                 $${((4.99*100)*2)/100}`

// 3m.
`Total before tax: $${((4.99*100)*2)/100 + ((20.95*100)*2+(7.99*100)*2)*0.01}`

// 3n.
`Estimated tax (10%): $${Math.round((((4.99*100)*2) + ((20.95*100)*2+(7.99*100)*2))*0.1)*0.01}`

// 3k1.
`Items (${1+1}):                         $${((20.95)*100+(7.99)*100)/100}`

// 3l1.
`Shipping & handling: $${Number('0').toFixed(2)}`

// 3m1.
`Total before tax:          $${Number((Number('0').toFixed(2))) + ((20.95)*100+(7.99)*100)/100}`

// 3n1.
`Estimated tax (10%):          $${Math.round(Number((Number('0').toFixed(2))) + ((20.95)*100+(7.99)*100)*0.1)*0.01}`


