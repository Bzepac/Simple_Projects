import os
import sys
import tkinter as tk
from tkinter import ttk
import pyautogui
import time
import threading

pyautogui.FAILSAFE = False

# Tkinter setup
root = tk.Tk()
root.title("Auto Scroll Lock")
root.geometry("300x200")

is_running = False

def start_script():
    global is_running
    is_running = True

    def run_script():
        while is_running:
            aktivnost_misa = False
            pocetno_vrijeme = time.time()

            while time.time() - pocetno_vrijeme < 120:
                x, y = pyautogui.position()
                time.sleep(1)

                if (x, y) != pyautogui.position():
                    aktivnost_misa = True
                    break

            if not aktivnost_misa:
                pyautogui.press('scrolllock')

    thread = threading.Thread(target=run_script)
    thread.start()
    update_status_label()

def stop_script():
    global is_running
    is_running = False
    update_status_label()

def update_status_label():
    if is_running:
        status_label.config(text="Script Running", foreground="green")
    else:
        status_label.config(text="Script Not Running", foreground="red")

# Define status_label
status_label = ttk.Label(root, text="Script Not Running", foreground="red")
status_label.pack(pady=10)

# Start the script initially
start_script()

# Start Button
start_button = ttk.Button(root, text="Restart Script", command=start_script)
start_button.pack(pady=10)

# Stop Button
stop_button = ttk.Button(root, text="Stop Script", command=stop_script)
stop_button.pack(pady=5)

def on_closing():
    stop_script()
    root.destroy()

root.protocol("WM_DELETE_WINDOW", on_closing)

root.mainloop()
