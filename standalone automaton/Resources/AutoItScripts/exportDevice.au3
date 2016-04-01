WinWaitActive("Save As")
Sleep(3000)
Send(@ScriptDir & "\..\downloads\");
Send("C:\Users\nivmanoh\Documents\office document\apollo Standalone\standalone automaton\standalone automaton\Resources\downloads\");
Send("{ENTER}")
Sleep(3000)
Send("exportDevice.csv")
Sleep(3000)
Send("{ENTER}")
Sleep(3000)