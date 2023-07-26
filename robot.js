function createRobot(coordinates,direccion) {
  let [x,y]=coordinates || [7,3]
  let orientation = direccion || 'north'
  let righOrientation = ['north','east','south','west']
  let message
  
  (function validator(){
    try {
      const isValid= righOrientation.includes(orientation)
      if(!isValid){
        throw new Error('invalid orientation')
      }
      if(x > 10 || y > 10 || x < 0 || y < 0){
          throw new Error('invalid coordinates')
      }
      message ='Robot created succesfuly'
    } catch (error) {
      message=error.message
    }
  })()

  function getPosition () {
    try {
      if(x > 10 || y > 10 || x < 0 || y < 0) {
          //throw new Error('out of limits')
          return ('out of limits')
      }
      return {coordinates: [x,y], orientation}
    } catch (error) {
      message=error.message
    }
  }

  function advance () {
          // función para avanza
    switch (orientation) {
      case 'north':
        y += 1;
      break;
      case 'east':
        x += 1;
      break;
      case 'south':
        y -= 1;
      break;
      case 'west':
        x -= 1;
      break;
  
      default:
          break;
    }
  }

  function turnRight ()  {
          // función para girar a la derecha

    switch (orientation) {
      case 'north':
        orientation = 'east';
      break;
      case 'east':
        orientation = 'south';
      break;
      case 'south':
        orientation = 'west';
      break;
      case 'west':
        orientation = 'north';
      break
  
      default:
      break;
    }
  }
  function turnLeft ()  {
          // función para girar a la derecha
    switch (orientation) {
        case 'north':
          orientation = 'west';
        break;
        case 'east':
          orientation = 'north';
        break
        case 'south':
          orientation = 'east';
        break;
        case 'west':
          orientation = 'south';
        break;
    
        default:
        break;
    }
  }

  function instructions (string) {
      // función para recibir una serie de instrucciones Ejm: "RAALAL"
      // En este metodo se va crear 
    let stringInstruction = ['R','L','A']
    const array = string.split("");
    array.map((element) => {
      try {
        const isValid= stringInstruction.includes(element)
          if (!isValid){
                //throw new Error('out of limits')
            return 'Invalid instruction'
          }
          switch (element) {
            case 'R':
              turnRight()
            break;
            case 'L':
              turnLeft()
            break
            case 'A':
                advance()
            break;
        
            default:
            break;
          }
        } catch (error) {
            message = error.message
        }
    });
          
  }

  return { 
    message,
    getPosition,
    advance,
    turnRight,
    turnLeft,
    instructions
  }
  
}
  
  module.exports = createRobot
  
  
  