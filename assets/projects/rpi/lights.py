
import time
import subprocess

num_light_levels = 8

def _increase_brightness():
    """ Helper function, calls increase-brightness """
    subprocess.call(["irsend", "SEND_ONCE", "LED_44_KEY", "BRIGHT_UP"])

def _set_color(color):
    """ Helper function, sets the color/mode """
    subprocess.call(["irsend","SEND_ONCE", "LED_44_KEY", str(color).upper() ])

### Helpers : predefined light levels
def comfortable_level(time_per_level):
    """ helper function, sets a comfortable level 

    Args:
        time_per_level ([int]): how much time is spent at this level
    """
    _set_color("PURPLE")
    time.sleep(time_per_level * 1/3)
    _set_color("WHITE")
    time.sleep(time_per_level * 2/3)

def uncomfortable_level(time_per_level):
    """ not aggressive, but not comfortable"""
    _set_color("YELLOW")
    time.sleep(time_per_level * 1/3)
    _set_color("WHITE")
    time.sleep(time_per_level * 2/3)

def aggressive_level(time_per_level):
    _set_color("WHITE")
    time.sleep(time_per_level * 1/4)
    _set_color("JUMP_7")
    time.sleep(time_per_level * 3/8)
    _set_color("FLASH")
    time.sleep(time_per_level * 3/8)

def start():
    """ helper function, turns on lights, sets them to dimmest setting """
    subprocess.call(["irsend", "SEND_ONCE", "LED_44_KEY", "POWER"]) # turn on lights
    _set_color("WHITE_2")
    for _ in range(10): # dim lights
        subprocess.call(["irsend", "SEND_START", "LED_44_KEY", "BRIGHT_DOWN"])
    time.sleep(5)

## Wake up

def wake_up_gentle(total_wake_up_time = 30 * 60):
    """ gentle morning lights """
    time_per_level = total_wake_up_time / num_light_levels

    start()
    for _ in range(num_light_levels): # progressively increase the light, from dim to bright
        _increase_brightness()
        comfortable_level(time_per_level)

def wake_up(total_wake_up_time = 20 * 60):
    """ moderately aggressive warm up lights"""
    time_per_level = total_wake_up_time / num_light_levels

    start()
    for _ in range(3): # warm up
        _increase_brightness()
        comfortable_level(time_per_level)
    
    for _ in range(2): # transition to aggressive
        _increase_brightness()
        _set_color("FADE_7")
        time.sleep(time_per_level)
    
    for _ in range(num_light_levels-(2+3)): # aggressive lights
        _increase_brightness()
        aggressive_level(time_per_level)
        
    _set_color("FLASH") # leave the lights in FLASHING mode at the end


def wake_up_aggressive(total_wake_up_time = 10 * 60):
    """ aggressive wake up lights """
    time_per_level = total_wake_up_time / num_light_levels
    
    start()
    for _ in range(2): # gentle warmup
        _increase_brightness()
        uncomfortable_level(time_per_level)
    
    for _ in range(num_light_levels-(2)): # aggressive lights
        _increase_brightness()
        aggressive_level(time_per_level)

    _set_color("FLASH") # leave the lights in FLASHING mode at the end

if __name__ == "__main__":
    wake_up_gentle()
    #wake_up()
    #wake_up_aggressive()
    