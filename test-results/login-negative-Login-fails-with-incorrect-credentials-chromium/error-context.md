# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Login" [level=2] [ref=e3]
  - generic [ref=e4]:
    - text: Username
    - textbox "Username" [ref=e5]:
      - /placeholder: Enter username
      - text: wrong_user
    - text: Password
    - textbox "Password" [ref=e6]:
      - /placeholder: Enter password
      - text: wrong_pass
    - button "Login" [active] [ref=e7] [cursor=pointer]
    - paragraph [ref=e8]: "abc: Sorry, your username or password is incorrect."
```