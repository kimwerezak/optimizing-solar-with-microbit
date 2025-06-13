def on_forever():
    led.plot_bar_graph(input.sound_level(), 255)
    if input.sound_level() > 113:
        pins.digital_write_pin(DigitalPin.P0, 1)
        pins.digital_write_pin(DigitalPin.P1, 1)
    else:
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
basic.forever(on_forever)
