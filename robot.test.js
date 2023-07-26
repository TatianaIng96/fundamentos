const  createRobot = require('./robot.js');

describe('createRobot', () => {
	test('should return error with message invalid orientation', () => {
		//Arrange
		const message = 'invalid orientation'
		//act
		 const myRobot = createRobot([2,1],'noth')
		//Assert
		expect(myRobot.message).toBe(message)
	});

	test('should return error with message invalid coordinates', () => {
		//Arrange
		const message = 'invalid coordinates'
		//act
		const myRobot = createRobot([11,1],'west')
		//Assert
		expect(myRobot.message).toBe(message)
	});
	test('should return Robot created succefully', () => {
		//Arrange
		const message = 'Robot created succesfuly'
		//act
		const myRobot = createRobot([9,1],'west')
		//Assert
		expect(myRobot.message).toBe(message)
	});
});

describe('getPosition function',() => {
	test('Should return error with message out of limits', () => {
		const message = 'out of limits'
		const myRobot = createRobot([11,1],'west')
		const result = myRobot.getPosition()
		expect(result).toBe(message)
	})
	test(' Should return  with place succefully', () => {
		const place =  {coordinates: [9,1], orientation: 'west'}
		const myRobot = createRobot([9,1],'west')
		const result = myRobot.getPosition()
		// expect(result).toHaveProperty('coordinates')
		expect(result).toMatchObject(place)
	})
})
describe('advance function',() => {
	test('Should advance with coordinates: [6,1], orientation: north', () => {
		const place =  {coordinates: [6,2], orientation: 'north'}
		const myRobot = createRobot([6,1],'north')
		myRobot.advance()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance with coordinates: [6,1], orientation: east', () => {
		const place =  {coordinates: [7,1], orientation: 'east'}
		const myRobot = createRobot([6,1],'east')
		myRobot.advance()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance with coordinates: [6,1], orientation: south', () => {
		const place =  {coordinates: [6,0], orientation: 'south'}
		const myRobot = createRobot([6,1],'south')
		myRobot.advance()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance with coordinates: [6,1], orientation: west', () => {
		const place =  {coordinates: [5,1], orientation: 'west'}
		const myRobot = createRobot([6,1],'west')
		myRobot.advance()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
})

describe('turnRight function',() => {
	test('Should advance to rigth with coordinates: [6,1], orientation: north', () => {
		const place =  {coordinates: [6,1], orientation: 'east'}
		const myRobot = createRobot([6,1],'north')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance to right with coordinates: [6,1], orientation: east', () => {
		const place =  {coordinates: [6,1], orientation: 'south'}
		const myRobot = createRobot([6,1],'east')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance to right with coordinates: [6,1], orientation: south', () => {
		const place =  {coordinates: [6,1], orientation: 'west'}
		const myRobot = createRobot([6,1],'south')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance to right with coordinates: [6,1], orientation: west', () => {
		const place =  {coordinates: [6,1], orientation: 'north'}
		const myRobot = createRobot([6,1],'west')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	
})

describe('turnLeft function',() => {
	test('Should advance to left with coordinates: [6,1], orientation: north', () => {
		const place =  {coordinates: [6,1], orientation: 'west'}
		const myRobot = createRobot([6,1],'north')
		myRobot.turnLeft()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance to left with coordinates: [6,1], orientation: east', () => {
		const place =  {coordinates: [6,1], orientation: 'north'}
		const myRobot = createRobot([6,1],'east')
		myRobot.turnLeft()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance to left with coordinates: [6,1], orientation: south', () => {
		const place =  {coordinates: [6,1], orientation: 'east'}
		const myRobot = createRobot([6,1],'south')
		myRobot.turnLeft()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance to left with coordinates: [6,1], orientation: west', () => {
		const place =  {coordinates: [6,1], orientation: 'south'}
		const myRobot = createRobot([6,1],'west')
		myRobot.turnLeft() 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	
})

describe('Instruction function', () =>{
	xtest('Shoul advance with instruction not valid and with  coordinates: [6,1], orientation: west', () => {
		const message = 'Invalid instruction'
		const myRobot = createRobot([6,1],'north')
		const result = myRobot.instructions('K')
		expect(result).toBe(message)
	})
	test('Shoul advance with instruction R and with  coordinates: [6,1], orientation: north', () => {
		const place =  {coordinates: [6,1], orientation: 'east'}
		const myRobot = createRobot([6,1],'north')
		myRobot.instructions('R') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Shoul advance with instruction R and with  coordinates: [6,1], orientation: east', () => {
		const place =  {coordinates: [6,1], orientation: 'south'}
		const myRobot = createRobot([6,1],'east')
		myRobot.instructions('R') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Shoul advance with instruction R and with  coordinates: [6,1], orientation: south', () => {
		const place =  {coordinates: [6,1], orientation: 'west'}
		const myRobot = createRobot([6,1],'south')
		myRobot.instructions('R') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Shoul advance with instruction R and with  coordinates: [6,1], orientation: west', () => {
		const place =  {coordinates: [6,1], orientation: 'north'}
		const myRobot = createRobot([6,1],'west')
		myRobot.instructions('R') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Shoul advance with instruction L and with  coordinates: [6,1], orientation: north', () => {
		const place =  {coordinates: [6,1], orientation: 'west'}
		const myRobot = createRobot([6,1],'north')
		myRobot.instructions('L') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Shoul advance with instruction L and with  coordinates: [6,1], orientation: east', () => {
		const place =  {coordinates: [6,1], orientation: 'north'}
		const myRobot = createRobot([6,1],'east')
		myRobot.instructions('L') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Shoul advance with instruction L and with  coordinates: [6,1], orientation: south', () => {
		const place =  {coordinates: [6,1], orientation: 'east'}
		const myRobot = createRobot([6,1],'south')
		myRobot.instructions('L') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Shoul advance with instruction L and with  coordinates: [6,1], orientation: west', () => {
		const place =  {coordinates: [6,1], orientation: 'south'}
		const myRobot = createRobot([6,1],'west')
		myRobot.instructions('L') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance with instruction A and with coordinates: [6,1], orientation: north', () => {
		const place =  {coordinates: [6,2], orientation: 'north'}
		const myRobot = createRobot([6,1],'north')
		myRobot.instructions('A')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance with instruction A and with coordinates: [6,1], orientation: east', () => {
		const place =  {coordinates: [7,1], orientation: 'east'}
		const myRobot = createRobot([6,1],'east')
		myRobot.instructions('A')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance with instruction A and with coordinates: [6,1], orientation: south', () => {
		const place =  {coordinates: [6,0], orientation: 'south'}
		const myRobot = createRobot([6,1],'south')
		myRobot.instructions('A')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
	test('Should advance with instruction A and with coordinates: [6,1], orientation: west', () => {
		const place =  {coordinates: [5,1], orientation: 'west'}
		const myRobot = createRobot([6,1],'west')
		myRobot.instructions('A')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

})

describe('created robot function complete', () => {
	test('Should function createdRobot with instruction RAALAL and with coordinates: [7,3], orientation: north', () => {
		const place =  {coordinates: [9,4], orientation: 'west'}
		const myRobot = createRobot([7,3],'north')
		myRobot.instructions('RAALAL')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
})