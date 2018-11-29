/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


enum TrackingStateType {
    //% block="● ●" enumval=0
    Tracking_State_0,

    //% block="● ◌" enumval=1
    Tracking_State_1,

    //% block="◌ ●" enumval=2
    Tracking_State_2,

    //% block="◌ ◌" enumval=3
    Tracking_State_3,
}



/**
 * Custom blocks
 */
//% color=#0fbc11 weight=10 icon="\uf207"
namespace RingbitCar {

    let pin_left_wheel = AnalogPin.P1
    let pin_right_wheel = AnalogPin.P2


    /**
    * TODO: describe your function here
    * @param left describe parameter here, eg: AnalogPin.P1
    * @param right describe parameter here, eg: AnalogPin.P2
    */
    //% weight=10
    //% blockId=ringbitcar_init block="set left wheel at pin %left|right wheel at pin %right"
    export function init_wheel(left: AnalogPin, right: AnalogPin): void {
        // Add code here
        pin_left_wheel = left
        pin_right_wheel = right

    }



    /**
    * TODO: describe your function here
    */
    //% weight=9
    //% blockId=ringbitcar_forward block="move forward"
    export function forward(): void {
        // Add code here

        pins.servoSetPulse(pin_left_wheel, 2400)
        pins.servoSetPulse(pin_right_wheel, 600)

    }



    /**
    * TODO: describe your function here
    */
    //% weight=8
    //% blockId=ringbitcar_back block="move back"
    export function back(): void {
        // Add code here

        pins.servoSetPulse(pin_left_wheel, 600)
        pins.servoSetPulse(pin_right_wheel, 2400)

    }



    /**
    * TODO: describe your function here
    */
    //% weight=7
    //% blockId=ringbitcar_left block="turn left"
    export function turnleft(): void {
        // Add code here

        pins.servoSetPulse(pin_left_wheel, 600)
        pins.servoSetPulse(pin_right_wheel, 600)

    }


    /**
    * TODO: describe your function here
    */
    //% weight=6
    //% blockId=ringbitcar_right block="turn right"
    export function turnright(): void {
        // Add code here

        pins.servoSetPulse(pin_left_wheel, 2400)
        pins.servoSetPulse(pin_right_wheel, 2400)

    }


    /**
    * TODO: describe your function here
    */
    //% weight=5
    //% blockId=ringbitcar_brake block="brake"
    export function brake(): void {
        // Add code here

        //pins.servoSetPulse(pin_left_wheel, 1500)
        //pins.servoSetPulse(pin_right_wheel, 1500)
        pins.digitalWritePin(<number>pin_left_wheel, 0)
        pins.digitalWritePin(<number>pin_right_wheel, 0)

    }



    /**
    * TODO: describe your function here
    * @param m the m from -100 (min) to 100 (max), eg:0
    * @param n the n from -100 (min) to 100 (max), eg:0
    */
    //% weight=4
    //% blockId=ringbitcar_freestyle block="left wheel speed %m| right wheel speed %n"
    //% m.min=-100 m.max=100
    //% n.min=-100 n.max=100
    export function freestyle(m: number, n: number): void {
        // Add code here

        if (m > 0) {
            pins.servoSetPulse(pin_left_wheel, 1600 + m * 8)
        } else if (m < 0) {
            pins.servoSetPulse(pin_left_wheel, 1400 + m * 8)
        } else pins.servoSetPulse(pin_left_wheel, 1500)


        if (n > 0) {
            pins.servoSetPulse(pin_right_wheel, 1400 - n * 8)
        } else if (n < 0) {
            pins.servoSetPulse(pin_right_wheel, 1600 - n * 8)
        } else pins.servoSetPulse(pin_right_wheel, 1500)

    }



    /**
    * TODO: describe your function here
    */
    //% weight=10
    //% advanced=true
    //% blockId=tracking block="tracking state is %state"
    export function line_follow_2(state: TrackingStateType): boolean {
        let sensor_pin = AnalogPin.P0
        
        if (pin_left_wheel != AnalogPin.P1 && pin_right_wheel != AnalogPin.P1) {
            sensor_pin = AnalogPin.P1
        } else if (pin_left_wheel != AnalogPin.P2 && pin_right_wheel != AnalogPin.P2) {
            sensor_pin = AnalogPin.P2
        }

        let i = pins.analogReadPin(sensor_pin)

        if (i < 100 && state == 0) {
            basic.showNumber(0)
            return true;
        } else if (i < 200 && state == 1) {
            basic.showNumber(1)
            return true;
        } else if (i < 300 && state == 2) {
            basic.showNumber(2)
            return true;
        } else if (i < 400 && state == 3) {
            basic.showNumber(3)
            return true;
        } else return false;



    }





}

