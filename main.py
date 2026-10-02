import webview
import sys
import os

def resource_path(relative_path):
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, relative_path)
    return os.path.join(os.path.abspath("."), relative_path)

caminho_html = resource_path('web/index.html')

webview.create_window('Calculadora', url=caminho_html, width=400, height=600)

webview.start()