# React + TypeScript + Vite + Bun JS w/ WSL2 (Fedora)

This documentation is for you that want to use Bun JS environment to develop React + Vite Website. Bun JS environment will use the WSL2 Environtment (I'm using Fedora but you can use Ubuntu or another distro too on your WSL).

## #1 Prepare your WSL2 Environtment
##### A. Find on the internet for how you can install WSL2 on Windows 10/11
##### B. You need to install unzip package

- If you on ```Ubuntu``` you can use : 
```sudo apt install unzip```

- If you on ```Fedora``` you can use : 
```sudo dnf install unzip```

## #2 Install the Bun environment
##### A. Use this curl link 
``` curl -fsSL https://bun.sh/install | bash ```

## #3 Create Vite Project
##### A. Create Vite project on your directory with : 
``` bun create vite@latest ```
Choose : 
> -> 'your-project-name'
> ->React
> ->TypeScript + SWC

Then :
```bun install```
```bun run dev```

##### B. You're all set
Open the web on ```http://localhost:5173``` 
