<template>
    <b-navbar :shadow="true">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{name: 'Foo'}">
                Go to Foo
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{name: 'Bar'}">
                Go to Bar
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item tag="router-link" :to="{name: 'Zoo'}">
                    About
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{name: 'Fizz'}">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

