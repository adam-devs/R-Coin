from token_client import *
from time import sleep

create("szymon")

fund("szymon", "amount 2")

print(get_balance("szymon"))

sleep(3)

print(get_balance("szymon"))
