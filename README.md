## 🔐 Jwt-auth

Простое приложение с формой регистрации, реализующее базовую авторизацию через JWT. Пользователь может зарегистрироваться, после чего получает токен для доступа к защищённым маршрутам.

## 🔐 Авторизация и доступ

| Метод | URL               | Описание                      | Middleware         |
|-------|-------------------|-------------------------------|--------------------|
| POST  | /login            | Вход пользователя             | —                  |
| POST  | /register         | Регистрация пользователя      | —                  |
| POST  | /logout           | Выход из системы              | auth:api           |
| GET   | /admin/dashboard  | Доступ для администратора     | auth:api, role:admin |
| GET   | /user/dashboard   | Доступ для обычного пользователя | auth:api, role:user |

✅ JWT-токен выдаётся при логине

✅ Роли проверяются через middleware

✅ Защита маршрутов реализована явно

Эндпоинт `POST /register` позволяет создать нового пользователя и получить JWT-токен для авторизации.

### 📦 Пример контроллера (Laravel)

```php
public function register(Request $request)
{
   $validate = $request->validate([
       'name' => 'required|string',
       'email' => 'required|email|unique:users',
       'password' => 'required|string'
   ]);

   $user = User::create([
       'name' => $validate['name'],
       'email' => $validate['email'],
       'password' => bcrypt($validate['password']),
       'role' => 'user'
   ]);

   $token = JWTAuth::fromUser($user);

   return response()->json([
       'token' => $token,
       'role' => $user->role
   ], 201);
}
```
## 📤 Отправка данных регистрации (Vue + Axios)

Пример действия `createUser`, отправляющего данные формы на API `/register`.

```js
actions: {
  async createUser() {
    try {
      await axios.post('http://127.0.0.1:8000/api/register', this.user);
      this.resetUser();
      showRegisterSuccess();
    } catch (err) {
      console.log(err);
    }
  }
}
```
