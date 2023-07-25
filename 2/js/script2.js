let firstUserName = prompt("Введіть ім'я першої дитини")
					let firstUserCandy = parseInt(prompt("Введіть кількість цукерок у першої дитини")) 
					let secondUserName = prompt("Введіть ім'я другої дитини")
					let secondUserCandy = parseInt(prompt("Введіть кількість цукерок у другої дитини"))

					if(firstUserCandy > secondUserCandy)
						document.write(`Перемагає ${firstUserName}, дитина має ${firstUserCandy} цукерок`)
						else if(firstUserCandy < secondUserCandy)
						document.write(`Перемагає ${secondUserName}, дитина має ${secondUserCandy} цукерок`)
						else if(firstUserCandy === secondUserCandy)
						document.write(`Перемагає дружба, бо діти мають однакову кількість цукерок - ${secondUserCandy}`)
						else
						document.write(`Введені не некоректні данні, оновіть сторінку та спробуйте ще раз)`)