<template>
    <div>
            <b-navbar toggleable="lg" type="light" variant="light" class="p-0 mt-2 mb-4">
                <b-navbar-brand>Perpustakaan</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">Home </b-nav-item>
                    <b-nav-item to="/book">List Buku </b-nav-item>
                    
                </b-navbar-nav>

                
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#" to="/checkout">
                        Sewa Buku
                        <!-- <b-icon-book></b-icon-book> -->
                        <b-badge  variant="primary">0</b-badge>
                    </b-nav-item>

                    <!-- <b-nav-item-dropdown right>
                    <template #button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown> -->
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
    </div>
</template>