<template>
  <b-navbar
    toggleable="sm"
    class="top-navbar py-0 px-sm-4">
    <b-navbar-nav class="ml-0 my-0 py-2">
      <b-form-group
        size="sm" class="p-0 m-0">
        <b-form-input
          class="m-0 py-1 px-2 search-data-form"
          type="text"
          id="search_data_form"
          placeholder="Search"
          size="sm">
        </b-form-input>
      </b-form-group>
    </b-navbar-nav>
    <b-collapse is-nav id="top_navbar">
      <b-btn-group class="mr-0 ml-auto py-0">
        <b-btn size="sm" class="py-0 px-1" variant="secondary">
          <small>Notifications</small>
        </b-btn>
        <b-btn size="sm" class="py-0 px-1" variant="secondary">
          <small>Profile</small>
        </b-btn>
        <b-btn size="sm" class="py-0 px-1" variant="danger">
          <small>Signout</small>
        </b-btn>
      </b-btn-group>
    </b-collapse>
  </b-navbar>
</template>
