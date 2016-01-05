// This sketch will send out a Nikon D50 trigger signal (probably works with most Nikons)
// See the full tutorial at http://www.ladyada.net/learn/sensors/ir.html
// this code is public domain, please enjoy!

int IRledPin =  9;    // LED connected to digital pin 13

// The setup() method runs once, when the sketch starts

void setup()   {
  // initialize the IR digital pin as an output:
  pinMode(IRledPin, OUTPUT);

  Serial.begin(57600);
}

void loop()
{
  Serial.println("Sending IR signal");
  test1();

  delay(500); // wait one minute (60 seconds * 1000 milliseconds)
}

// This procedure sends a 38KHz pulse to the IRledPin
// for a certain # of microseconds. We'll use this whenever we need to send codes
void pulseIR(long microsecs) {
  // we'll count down from the number of microseconds we are told to wait

  //cli();  // this turns off any background interrupts

  while (microsecs > 0) {
    // 38 kHz is about 13 microseconds high and 13 microseconds low
    digitalWrite(IRledPin, HIGH);  // this takes about 3 microseconds to happen
    delayMicroseconds(10);         // hang out for 10 microseconds, you can also change this to 9 if its not working
    digitalWrite(IRledPin, LOW);   // this also takes about 3 microseconds
    delayMicroseconds(10);         // hang out for 10 microseconds, you can also change this to 9 if its not working

    // so 26 microseconds altogether
    microsecs -= 26;
  }

  //sei();  // this turns them back on
}

void test1() {
  pulseIR(7420);
  delayMicroseconds(2470);
  pulseIR(4990);
  delayMicroseconds(2410);
  pulseIR(5000);
  delayMicroseconds(2410);
  pulseIR(4960);
  delayMicroseconds(2450);
  pulseIR(4990);
  delayMicroseconds(2410);
  pulseIR(2470);
  delayMicroseconds(2460);
  pulseIR(2490);
  delayMicroseconds(2440);
  pulseIR(2490);
  delayMicroseconds(2440);
  pulseIR(2490);
}
