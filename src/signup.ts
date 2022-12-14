import { signup } from "./api/products";




const Singup = {
  render: async () => {
    return /*html*/`
              <div class="relative flex h-full w-full">
              <div class="h-screen w-1/2 bg-black">
                  <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
                      <div>
                          <p class="text-2xl">SIGNUP</p>
                          
                      </div>
                      <div class="my-6">
                          <button
                              class="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"><img
                                  src="https://freesvg.org/img/1534129544.png" class="mr-2 w-6 object-fill" />Sign in with
                              Google</button>
                      </div>
                      <div>
                          <fieldset class="border-t border-solid border-gray-600">
                              <legend class="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
                          </fieldset>
                      </div>
                      <div class="mt-10">
                          <form id="formAdd">
                              <div>
                                  <label class="mb-2.5 block font-extrabold" for="email">Name</label>
                                  <input type="text" id="name"
                                      class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                                      placeholder="" />

                                      <span id="span0" class="" style="text-color: #ffff;">
                                      </span>
                              </div>
                              <div>
                                  <label class="mb-2.5 block font-extrabold" for="email">Email</label>
                                  <input type="email" id="email"
                                      class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                                      placeholder="Gmail@gmail.com" />

                                      <span id="span1" class="" style="text-color: #ffff;">
                                      </span>
                              </div>
                              <div class="mt-4">
                                  <label class="mb-2.5 block font-extrabold" for="email">Password</label>
                                  <input type="text" id="password"
                                      class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
                                      
                                      <span id="span2" class="" style="text-color: #ffff;">
                                      </span>
                              </div>
                              <div class="mt-4">
                                  <label class="mb-2.5 block font-extrabold" for="email">Phone</label>
                                  <input type="number" id="phone"
                                      class="inline-block w-full rounded-full bg-white p-2.5 text-black placeholder-indigo-900 " />

                                      <span id="span3" class="" style="text-color: #ffff;">
                                      </span>

                                      <span id="span4" class="" style="text-color: #ffff;">
                                      </span>
                              </div>
                              <div class="my-10">
                                  <button class="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">SIGNUP</button>
                              </div>
                              <div>
                                <a  class="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2" href="/signin">
                                    SIGNIN
                                </a>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              <div class="h-screen w-1/2 bg-blue-600">
                  <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" class="h-full w-full" />
              </div>
          </div>
      `
  },
  afterRender() {
    const form = document.querySelector('#formAdd');
    const name: any = document.querySelector('#name');
    const email: any = document.querySelector('#email');
    const password: any = document.querySelector('#password');
    const phone: any = document.querySelector('#phone');

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      // const user = {
      //   name: name.value,
      //   email: email.value,
      //   password: password.value,
      //   phone: phone.value
      // }

      // await signup(user)

      async function validate() {
        if (name.value == "") {
          let span0 = <HTMLElement>document.getElementById('span0');
          span0.innerHTML = "Vui l??ng nh???p t??n";
          name.focus();
          return false;
        }
        if (email.value == "") {
          let span1 = <HTMLElement>document.getElementById('span1');
          span1.innerHTML = "Vui l??ng nh???p email";
          email.focus();
          return false;
        }
        if (password.value == "") {
          let span2 = <HTMLElement>document.getElementById('span2');
          span2.innerHTML = "Vui l??ng nh???p password";
          password.focus();
          return false;
        }
        if (phone.value == "") {
          let span3 = <HTMLElement>document.getElementById('span3');
          span3.innerHTML = "Vui l??ng nh???p phone";
          phone.focus();
          return false;
        }
        else {
          const user = {
            name: name.value,
            email: email.value,
            password: password.value,
            phone: phone.value
          }
          await signup(user)
        }

      }
      await validate();
    })
  }
}

export default Singup;
